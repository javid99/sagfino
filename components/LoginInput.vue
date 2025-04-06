<template>
  <div class="flex flex-col gap-1">
    <div
      class="relative inline-flex items-center rounded-xl border border-neutral-Gray-7 px-3 py-5 hover:border-neutral-Gray-3 hover:bg-neutral-Gray-3 has-[:disabled]:border-neutral-Gray-5 has-[:focus]:border-info-blue has-[:focus]:shadow-[0px_0px_0px_4px_rgba(47,128,237,0.19)]"
      :class="hasValue ? '!border-neutral-Gray-10' : ''"
    >
      <Icon
        v-if="icon"
        mode="svg"
        :name="'my-iconsax:' + icon"
        class="custom-icon ml-3 fill-neutral-Gray-10"
        :class="disabled ? 'fill-neutral-Gray-5' : ''"
        size="20"
      />
      <input
        :type="type"
        :name="name"
        :placeholder="placeholder"
        class="peer bg-transparent text-sm font-medium transition-transform placeholder:text-neutral-Gray-10 focus:translate-y-[10px] focus:outline-none disabled:placeholder:text-neutral-Gray-5"
        :class="error ? 'placeholder:!text-error-Light-1' : ''"
        @focusout="focusedOut"
        @focus="focusedIn"
        v-model="inputValue"
        :disabled="disabled"
      />
      <label
        for=""
        class="absolute right-11 top-5 text-xs text-neutral-Gray-10 opacity-0 transition-all peer-focus:top-3 peer-focus:opacity-100"
        :class="error ? '!text-error-Light-1' : ''"
        >{{ label }}</label
      >
      <button class="mr-2" v-if="type === inputType.password">
        <Icon
          mode="svg"
          name="my-iconsax:eye"
          class="custom-icon fill-neutral-Gray-10"
          :class="disabled ? 'fill-neutral-Gray-5' : ''"
          size="20"
        />
      </button>
    </div>
    <p
      class="pr-3 text-xs text-error-Light-1"
      v-if="error && errorMessages && errorMessages?.length > 0"
    >
      * {{ errorMessages }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { inputType } from "@/types/enums/inputEnums";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: String,
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<inputType>,
    default: inputType.text,
  },
  name: {
    type: String,
    required: true,
  },
  disabled: Boolean,
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: String,
    default: "This field is required.",
  },
});

const inputValue = defineModel<string>();
const emit = defineEmits(["update:error"]);

const hasValue = ref<boolean>(false);

const focusedOut = (target: Event) => {
  const el = target.target as HTMLInputElement;
  if (el.value.length > 0) {
    hasValue.value = true;
  } else {
    hasValue.value = false;
  }
};

const focusedIn = () => {
  hasValue.value = false;
  emit('update:error', false);
};
</script>

<style scoped>
.custom-icon * {
  fill: inherit;
}
</style>