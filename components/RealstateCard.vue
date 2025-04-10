<template>
  <div
    class="flex flex-col items-center gap-2 rounded-2xl border border-neutral-Gray-4 px-12 py-8"
  >
    <div class="flex flex-col items-center gap-4">
      <img :src="image" alt="" class="max-w-24" v-if="image" />
      <Icon v-else name="my-iconsax:camera-slash" mode="svg" size="66" />
      <h5 class="text-xl font-bold text-neutral-Gray-12">
        <span>{{ title }}</span>
        <i
          class="mr-2 inline-block h-4 w-4 bg-[url('./images/tick.svg')] align-middle"
        ></i>
      </h5>
    </div>
    <span class="text-lg text-neutral-Gray-11">{{ address }}</span>
    <span class="text-neutral-Gray-9">میزان رضایتمندی: {{ rating }} از ۵</span>
    <span class="text-neutral-Gray-9">آگهی‌های فعال: بیش از {{ posts }} </span>
    <button class="px-3 py-2 text-sm font-medium text-neutral-Gray-9">
      مشاهده نظرات کاربران ({{ reviews }} نظر)
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: String,
  title: {
    type: String,
    required: true,
  },
  address: String,
  rating: {
    type: Number,
    default: 5,
  },
  posts: Number,
  reviews: {
    type: Number,
    default: 0,
  },
});
</script>

<style></style>
