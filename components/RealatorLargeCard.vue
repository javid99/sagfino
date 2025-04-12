<template>
  <div class="flex gap-4 rounded-2xl border border-neutral-Gray-5 p-6">
    <div class="inline-block h-20 w-20">
      <img
        :src="image"
        class="h-full w-full rounded-full object-cover"
        alt=""
      />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex items-end gap-2">
        <img :src="logo" class="max-w-9" alt="" />
        <i
          class="inline-block size-6 bg-[url('./images/home.svg')] bg-contain bg-no-repeat"
        ></i>
        <span class="font-bold text-neutral-Gray-10">{{ title }}</span>
      </div>
      <h6 class="text-2xl font-bold text-neutral-Gray-12">{{ name }}</h6>
      <span class="text-sm text-neutral-Gray-11">امتیاز {{ rating }} از ۵</span>
      <span class="text-sm text-neutral-Gray-11">{{ posts }} آگهی فعال</span>
      <BaseButton
        label="اطلاعات تماس"
        :variant="Variant.Solid"
        :color="Color.Primary"
        :size="Size.Md"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Color, Size, Type, Variant } from "@/types/enums/buttonEnums";

const props = defineProps({
  image: String,
  logo: String,
  title: {
    type: String,
    required: true,
  },
  name: {
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
