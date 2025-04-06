<template>
  <div
    class="group flex items-center gap-1 rounded-lg border px-4 py-3"
    :class="
      inputFocus
        ? '!border-info-blue shadow-[0_0_0_3px_rgba(47,128,237,0.19)]'
        : inputSelected
          ? 'border-neutral-Gray-11'
          : disabled
            ? 'border-neutral-Gray-5 bg-neutral-Gray-1'
            : isInvalid
              ? 'border-error-Light-1'
              : 'border-neutral-Gray-7 hover:border-neutral-Gray-9'
    "
  >
    <Icon
      mode="svg"
      :name="'my-iconsax:' + iconRight"
      v-if="iconRight"
      class="input-icon lg:size-6"
      :class="
        inputFocus
          ? 'fill-info-blue'
          : inputSelected
            ? 'fill-neutral-Gray-11'
            : disabled
              ? 'fill-neutral-Gray-5'
              : isInvalid
                ? 'fill-error-Light-1'
                : 'fill-neutral-Gray-10 group-hover:fill-neutral-Gray-9'
      "
    />
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      @focusin="inputFocused"
      @focusout="inputUnfocused"
      class="text-neutral-Gray-11 focus:outline-none lg:text-sm"
      :class="
        isInvalid
          ? 'placeholder:text-error-Light-1'
          : 'placeholder:text-neutral-Gray-10 disabled:placeholder:text-neutral-Gray-5 group-hover:placeholder:text-neutral-Gray-9'
      "
      v-model="inputValue"
      :disabled="disabled"
    />
    <Icon
      mode="svg"
      :name="'my-iconsax:' + iconLeft"
      v-if="iconLeft"
      class="input-icon lg:size-6"
      :class="
        inputFocus
          ? 'fill-info-blue'
          : inputSelected
            ? 'fill-neutral-Gray-11'
            : disabled
              ? 'fill-neutral-Gray-5'
              : isInvalid
                ? 'fill-error-Light-1'
                : 'fill-neutral-Gray-10 group-hover:fill-neutral-Gray-9'
      "
    />
  </div>
</template>

<script lang="ts" setup>
import { inputType } from "@/types/enums/inputEnums";

const inputFocus = ref<boolean>(false);
const inputSelected = ref<boolean>(false);
const inputValue = defineModel<string>({ default: "" });

const emits = defineEmits(["inputFocus"]);

const props = defineProps({
  placeholder: String,
  iconRight: String,
  name: String,
  iconLeft: String,
  type: {
    type: String as PropType<inputType>,
    default: inputType.text,
  },
  disabled: Boolean,
  isInvalid: Boolean,
});

const inputFocused = () => {
  inputFocus.value = true;
  inputSelected.value = false;
  emits("inputFocus");
};

const inputUnfocused = () => {
  inputFocus.value = false;
  if (inputValue.value.length > 0) inputSelected.value = true;
};
</script>

<style>
.input-icon * {
  fill: inherit !important;
}
</style>
