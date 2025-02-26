<template>
   <div>
      <button :type="type" class="border border-solid" :class="buttonClasses">
         <span>{{ label }}</span>
      </button>
   </div>
</template>

<script lang="ts" setup>
import { Color, Size, Type, Variant } from "@/types/enums/buttonEnums";

const props = defineProps({
   label: String,
   size: {
      type: String as PropType<Size>,
      default: Size.Md,
   },
   color: {
      type: String as PropType<Color>,
      default: Color.Primary,
   },
   disabled: Boolean,
   loading: Boolean,
   iconBefore: String,
   IconAfter: String,
   type: {
      type: String as PropType<Type>,
      default: Type.Button,
   },
   variant: {
      type: String as PropType<Variant>,
      default: Variant.Solid,
   },
});

const buttonClasses = computed(() => {
   const classes: string[] = [];
   switch (props.size) {
      case "sm":
         classes.push("text-xs", "px-4", "py-2");
         break;
      case "md":
         classes.push("text-sm", "px-4", "py-2");
         break;
      case "lg":
         classes.push("text-sm", "px-4", "py-3");
         break;
      case "xl":
         classes.push("text-lg", "px-4", "py-4");
         break;
   }

   return classes;
});
</script>

<style></style>
