<template>
  <div
    class="flex flex-col rounded-2xl border border-neutral-Gray-4 transition-all hover:border-neutral-Gray-8"
  >
    <div class="relative inline-block">
      <a
        href="#"
        class="flex items-center justify-center"
        :class="!image ? 'h-40 rounded-t-2xl bg-neutral-Gray-3' : ''"
      >
        <img
          :src="image"
          class="max-h-40 w-full rounded-t-2xl object-cover"
          alt=""
          v-if="image"
        />
        <Icon v-else name="my-iconsax:camera-slash" mode="svg" size="88" />
        <span
          class="absolute left-3 top-3 inline-block rounded px-1 py-2 text-white"
          :class="image ? 'bg-black/40' : 'bg-black/20'"
          >{{ time }} ساعت پیش</span
        >
      </a>
    </div>
    <div class="flex flex-col gap-1 px-[0.875rem] pb-6 pt-[0.625rem]">
      <div class="flex items-center justify-between">
        <a href="#" class="text-neutral-Gray-8">
          <span>{{ title }}</span>
        </a>
        <button>
          <Icon name="my-iconsax:save" mode="svg" />
        </button>
      </div>
      <span class="text-neutral-Gray-10">{{ options }}</span>
      <span class="font-bold text-neutral-Gray-11"
        >{{ mortgagePrice }} میلیون تومان رهن</span
      >
      <span class="font-bold text-neutral-Gray-11"
        >{{ rentPrice }} میلیون تومان اجاره</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: String,
  time: String,
  title: {
    type: String,
    required: true,
  },
  options: {
    type: String,
    required: true,
  },
  mortgagePrice: {
    type: Number,
    required: true,
  },
  rentPrice: {
    type: Number,
    required: true,
  },
});
</script>

<style></style>
