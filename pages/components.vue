<template>
  <div class="container my-4 flex flex-col gap-8">
    <!-- SECTION Button components -->
    <div class="flex flex-wrap gap-6">
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Solid"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Solid"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Solid"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Solid"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
          :disabled="true"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Outline"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Outline"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
          :disabled="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Outline"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Outline"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Link"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Link"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Link"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
          :disabled="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Link"
          :color="Color.Primary"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Solid"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
          :disabled="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Solid"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Solid"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Solid"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Outline"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Outline"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
          :disabled="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Outline"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Outline"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Link"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Link"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Link"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Link"
          :color="Color.Gray"
          icon-before="arrow-right"
          icon-after="arrow-square-left"
          :disabled="true"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Solid"
          :color="Color.Primary"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Solid"
          :color="Color.Primary"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Solid"
          :color="Color.Primary"
          icon-before="arrow-right"
          :disabled="true"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Solid"
          :color="Color.Primary"
          icon-before="arrow-right"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Outline"
          :color="Color.Primary"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Outline"
          :color="Color.Primary"
          icon-before="arrow-right"
          :disabled="true"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Outline"
          :color="Color.Primary"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Outline"
          :color="Color.Primary"
          icon-before="arrow-right"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Solid"
          :color="Color.Gray"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Solid"
          :color="Color.Gray"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Solid"
          :color="Color.Gray"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Solid"
          :color="Color.Gray"
          icon-before="arrow-right"
          :disabled="true"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Outline"
          :color="Color.Gray"
          icon-before="arrow-right"
          :disabled="true"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Outline"
          :color="Color.Gray"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Outline"
          :color="Color.Gray"
          icon-before="arrow-right"
        />
        <BaseButton
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Outline"
          :color="Color.Gray"
          icon-before="arrow-right"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Solid"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Solid"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Solid"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Solid"
          :color="Color.Primary"
          :loading="true"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Outline"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Outline"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Outline"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Outline"
          :color="Color.Primary"
          :loading="true"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Link"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Link"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Link"
          :color="Color.Primary"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Link"
          :color="Color.Primary"
          :loading="true"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Solid"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Solid"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Solid"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Solid"
          :color="Color.Gray"
          :loading="true"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Outline"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Outline"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Outline"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Outline"
          :color="Color.Gray"
          :loading="true"
        />
      </div>
      <div class="flex flex-col items-start gap-3">
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Sm"
          :variant="Variant.Link"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Md"
          :variant="Variant.Link"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Lg"
          :variant="Variant.Link"
          :color="Color.Gray"
          :loading="true"
        />
        <BaseButton
          label="متن دکمه"
          :type="Type.Button"
          :size="Size.Xl"
          :variant="Variant.Link"
          :color="Color.Gray"
          :loading="true"
        />
      </div>
    </div>

    <!-- SECTION Search box with tabs -->
    <div class="flex flex-wrap gap-6">
      <SearchboxTab />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Color, Size, Type, Variant } from "@/types/enums/buttonEnums";

useHead({
  title: "کامپوننت ها",
});
</script>

<style></style>
