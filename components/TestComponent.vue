<template>
  <div>
    <input type="text" class="border" @focusin="focused" />
    {{ error }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  error: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["focused"]);
const focused = () => {
  emit("focused");
};
</script>

<style></style>
