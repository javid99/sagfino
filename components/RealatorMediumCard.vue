<template>
  <div
    class="flex flex-col items-center gap-1 rounded-2xl border border-neutral-Gray-4 px-6 pb-6 pt-4"
  >
    <div class="inline-block size-36">
      <img
        :src="image ? image : './images/user.svg'"
        class="h-full w-full rounded-full object-cover"
        alt=""
      />
    </div>
    <h6 class="text-xl font-bold leading-8 text-neutral-Gray-12">{{ name }}</h6>
    <span class="text-lg leading-8 text-neutral-Gray-9">{{ title }}</span>
    <span class="text-lg leading-8 text-neutral-Gray-9"
      >امتیاز {{ rating }} از ۵</span
    >
    <BaseButton
      label="نمایش پروفایل"
      :variant="Variant.Outline"
      :color="Color.Primary"
    />
  </div>
</template>

<script lang="ts" setup>
import { Color, Size, Type, Variant } from "@/types/enums/buttonEnums";

const props = defineProps({
  image: String,
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 5,
  },
  posts: Number,
});
</script>

<style></style>
