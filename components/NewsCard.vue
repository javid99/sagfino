<template>
  <div class="flex flex-col rounded-lg">
    <div class="inline-block">
      <img :src="image" class="rounded-t-lg" alt="" />
    </div>
    <div class="flex w-full px-5 py-6">
      <h6 class="text-center text-xl font-bold text-neutral-Gray-10">
        {{ title }}
      </h6>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  image: String,
});
</script>

<style></style>
