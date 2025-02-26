<template>
   <div class="container">
      <BaseButton
         label="متن دکمه"
         :type="Type.Button"
         :size="Size.Sm"
         :variant="Variant.Solid"
         :color="Color.Primary"
      />
   </div>
</template>

<script lang="ts" setup>
import { Color, Size, Type, Variant } from "@/types/enums/buttonEnums";
</script>

<style></style>
