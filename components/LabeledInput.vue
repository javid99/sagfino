<template>
  <div class="flex flex-col gap-1">
    <label for="" class="text-lg text-neutral-Gray-11">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      v-model="value"
      class="rounded-lg border border-neutral-Gray-7 px-4 py-3 text-sm text-neutral-Gray-11 placeholder:text-neutral-Gray-7 hover:border-neutral-Gray-3 hover:bg-neutral-Gray-3 focus:border-info-blue focus:shadow-[0px_0px_0px_4px_rgba(47,128,237,0.19)] focus:outline-none disabled:border-neutral-Gray-5 disabled:bg-white disabled:text-neutral-Gray-5 disabled:placeholder:text-neutral-Gray-5"
      @focusout="focusOut"
      @focusin="focusIn"
      :class="invalidClass"
      :disabled="disabled"
    />
    <span
      v-if="isInvalid && errorMessage.length"
      class="text-xs text-error-Light-1"
      >* {{ errorMessage }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import { inputType } from "@/types/enums/inputEnums";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<inputType>,
    default: inputType.text,
  },
  placeholder: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isInvalid: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
});
const value = defineModel();

const inputClass = ref<string[]>([]);
const emit = defineEmits(["focused"]);

const focusOut = () => {
  if (value.length > 0) {
    inputClass.value.push("!border-neutral-Gray-11");
  }
};

const focusIn = () => {
  inputClass.value = [];
  emit("focused");
};

const invalidClass = computed(() => {
  return props.isInvalid
    ? "placeholder:!text-error-Light-1 !text-error-Light-1"
    : "";
});
</script>

<style></style>
