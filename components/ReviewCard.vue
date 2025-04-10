<template>
  <div
    class="flex flex-col items-center gap-2 rounded-2xl border border-neutral-Gray-3 px-3 py-8 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.05)]"
  >
    <div
      class="flex flex-col items-center gap-2 border-b-2 border-primary-Shade-1"
    >
      <img
        :src="image ? image : './images/user.svg'"
        alt=""
        class="h-16 w-16 rounded-full object-cover"
      />
      <span class="text-sm text-neutral-Gray-11">{{ name }}</span>
      <span class="p-1 text-neutral-Gray-11">امتیاز ۵ از {{ rating }}</span>
    </div>
    <p class="text-center text-sm leading-6 text-neutral-Gray-10">
      {{ review }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: String,
  name: {
    type: String,
    default: "کاربر ناشناس",
  },
  rating: {
    type: Number,
    default: 5,
  },
  review: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
