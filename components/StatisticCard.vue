<template>
  <div class="flex flex-col rounded-lg bg-white">
    <div class="inline-block">
      <img :src="image" class="rounded-t-lg" alt="" />
    </div>
    <div class="flex flex-col items-center gap-2 px-4 py-4">
      <Icon
        name="my-iconsax-bold:house"
        mode="svg"
        size="28"
        class="custom-icon fill-primary-default"
      />
      <span class="text-xl font-bold text-neutral-Gray-10">{{ title }}</span>
      <span class="text-neutral-Gray-10">{{ category }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: String,
  title: String,
  category: String,
});
</script>

<style>
.custom-icon * {
  fill: inherit !important;
}
</style>
