<template>
  <div
    id="searchbox-tab"
    class="flex w-full flex-col gap-[10px] rounded-xl border border-neutral-Gray-7 bg-white px-7 pb-3 pt-[14px] hover:border-neutral-Gray-3 hover:bg-neutral-Gray-3"
  >
    <div class="flex">
      <div
        class="flex flex-1 justify-center border-b border-neutral-Gray-5 pb-[6px]"
        :class="activeTab === 'rent' ? 'border-primary-default' : ''"
      >
        <button type="button" class="w-full" @click="changeTab('rent')">
          اجاره
        </button>
      </div>
      <div
        class="flex flex-1 justify-center border-b border-neutral-Gray-5 pb-[6px]"
        :class="activeTab === 'sell' ? 'border-primary-default' : ''"
      >
        <button type="button" class="w-full" @click="changeTab('sell')">
          خرید
        </button>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Icon name="my-iconsax:search-normal-1" mode="svg" size="24" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="شهر مورد نظر را جست‌وجو کنید"
        class="flex-1 bg-transparent text-lg text-neutral-Gray-11 placeholder:text-neutral-Gray-11 focus:outline-none"
        @focusin="focusBox"
        @focusout="focusLeave"
        v-model="store.search"
        @input="completeShow = true"
      />
    </div>
    <div class="pr-8" v-show="completeShow">
      <ul class="flex flex-col gap-3">
        <li v-for="city in store.filterCities" :key="city.id">
          <button
            type="button"
            @click="autoCompleted"
            class="text-sm text-neutral-Gray-7"
            v-html="city.highlight"
          ></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyCitiesStore } from "@/stores/cities";
const completeShow = ref<boolean>(true);

let activeTab = ref<string>("rent");

const store = useMyCitiesStore();
store.fetchCities();

const changeTab = (tab: string): void => {
  activeTab.value = tab;
};

const autoCompleted = (event: Event): void => {
  store.search = (event.currentTarget as HTMLButtonElement).innerText;
  completeShow.value = false;
};

const focusBox = (): void => {
  document
    .getElementById("searchbox-tab")
    ?.classList.add(
      "!border-info-blue",
      "shadow-[0_0_0_4px_rgba(47,128,237,0.19)]",
    );
};

const focusLeave = (): void => {
  document
    .getElementById("searchbox-tab")
    ?.classList.remove(
      "!border-info-blue",
      "shadow-[0_0_0_4px_rgba(47,128,237,0.19)]",
    );
};
</script>

<style></style>
