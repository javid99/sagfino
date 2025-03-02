import { defineStore } from "pinia";

export const useMyCitiesStore = defineStore("cities", () => {
  const cities = ref<
    {
      name: string;
      state: string;
      latitude: string;
      longitude: string;
      id: number;
    }[]
  >([]);
  const search = ref<string>("");

  const fetchCities = async () => {
    const url: string = "http://localhost:3000/cities";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    cities.value = data;
  };

  const filterCities = computed(() => {
    if (search.value) {
      const regex = new RegExp(`(${search.value})`, "gi");
      const filtered = cities.value.filter((c) =>
        c.name.includes(search.value),
      );
      return filtered.map((city) => ({
        name: city.name,
        id: city.id,
        state: city.state,
        latitude: city.latitude,
        longitude: city.longitude,
        highlight: city.name.replace(
          regex,
          '<span class="text-neutral-Gray-11">$1</span>',
        ),
      }));
    } else {
      return [];
    }
  });

  return { cities, fetchCities, filterCities, search };
});
