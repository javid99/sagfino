<template>
  <div
    class="flex items-center justify-between rounded-2xl border-2 border-white px-8 py-6 shadow-[0px_-4px_14px_0px_rgba(255,255,255,0.25)_inset]"
    :class="color === 'gray' ? 'bg-neutral-Gray-2' : 'bg-white'"
  >
    <div class="flex items-center gap-11">
      <NuxtLink to="/">
        <img src="/images/Logo.svg" alt="" />
      </NuxtLink>
      <ul class="flex gap-6">
        <li>
          <NuxtLink
            to="/"
            class="border-b border-transparent text-xl text-neutral-Gray-10 hover:border-primary-default hover:text-primary-default"
            >اجاره</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/"
            class="border-b border-transparent text-xl text-neutral-Gray-10 hover:border-primary-default hover:text-primary-default"
            >خرید</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/"
            class="border-b border-transparent text-xl text-neutral-Gray-10 hover:border-primary-default hover:text-primary-default"
            >املاک و مستغلات</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/"
            class="border-b border-transparent text-xl text-neutral-Gray-10 hover:border-primary-default hover:text-primary-default"
            >مشاورین املاک</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/"
            class="border-b border-transparent text-xl text-neutral-Gray-10 hover:border-primary-default hover:text-primary-default"
            >اخبار روز</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-9">
      <!-- not login -->
      <!-- <button class="text-xl text-neutral-Gray-10">ورود</button> -->

      <!-- logged in -->
      <button
        class="group flex items-center gap-2 text-lg text-neutral-Gray-10 hover:text-primary-default"
      >
        <Icon
          mode="svg"
          name="my-iconsax:profile-circle"
          size="24"
          class="custom-icon fill-neutral-Gray-10 group-hover:fill-primary-default"
        />
        <span>پروفایل</span>
      </button>
      <BaseButton label="ثبت آگهی" :variant="Variant.Outline" :size="Size.Lg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Color, Size, Type, Variant } from "@/types/enums/buttonEnums";
const props = defineProps({
  color: {
    type: String,
    default: "white",
  },
});
</script>

<style scoped>
.custom-icon * {
  fill: inherit !important;
}
</style>
