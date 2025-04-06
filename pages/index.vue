<template>
  <div class="container">
    <p>این صفحه اصلی سایت است</p>
    <TestComponent :count="counter" @clicked="test" />
  </div>
</template>

<script lang="ts" setup>
const counter = ref<number>(1);
const test = () => {
  console.log("TestComponent clicked");
  counter.value++;
};
useHead({
  title: "صفحه اصلی",
});
</script>

<style></style>
