<template>
  <div>
    <button
      @click="dialogVisible = true"
      class="group inline-flex items-center gap-2 rounded-lg border border-neutral-Gray-7 px-4 py-3 text-neutral-Gray-10 hover:border-neutral-Gray-3 hover:bg-neutral-Gray-3"
    >
      <Icon
        name="my-iconsax:filter-search"
        mode="svg"
        class="custom-icon size-6 fill-neutral-Gray-10"
      />
      <span>فیلتر های بیشتر</span>
      <Icon
        name="my-iconsax:arrow-square-left"
        mode="svg"
        class="custom-icon size-6 fill-neutral-Gray-10"
      />
    </button>

    <el-dialog
      v-model="dialogVisible"
      fullscreen
      :show-close="false"
      width="500"
      class="!rounded-2xl !px-20 !py-0"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class="relative flex items-center py-8">
          <button @click="close" class="absolute flex items-center">
            <Icon name="my-iconsax:close-circle" mode="svg" size="24" />
          </button>
          <h4
            class="flex-1 text-center text-2xl font-bold text-neutral-Gray-11"
            :id="titleId"
            :class="titleClass"
          >
            فیلترها
          </h4>
        </div>
      </template>
      <div class="flex flex-col gap-6 pb-6">
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">اتاق خواب</span>
          <el-radio-group v-model="radio1" size="large">
            <el-radio-button label="هر تعداد" value="any" />
            <el-radio-button label="بدون اتاق" value="none" />
            <el-radio-button label="1" value="1" />
            <el-radio-button label="2" value="2" />
            <el-radio-button label="3" value="3" />
            <el-radio-button label="4" value="4" />
            <el-radio-button label="5+" value="5+" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">پارکینگ</span>
          <el-radio-group v-model="radio2" size="large">
            <el-radio-button label="هر تعداد" value="any" />
            <el-radio-button label="ندارد" value="none" />
            <el-radio-button label="1" value="1" />
            <el-radio-button label="2" value="2" />
            <el-radio-button label="3+" value="3+" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">انباری</span>
          <el-radio-group v-model="radio3" size="large">
            <el-radio-button label="هر تعداد" value="any" />
            <el-radio-button label="ندارد" value="none" />
            <el-radio-button label="1" value="1" />
            <el-radio-button label="2" value="2" />
            <el-radio-button label="3+" value="3+" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">سرویس بهداشتی</span>
          <el-radio-group v-model="radio4" size="large">
            <el-radio-button label="هر تعداد" value="any" />
            <el-radio-button label="1" value="1" />
            <el-radio-button label="2" value="2" />
            <el-radio-button label="3" value="3" />
            <el-radio-button label="4+" value="4+" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">نوع سرویس بهداشتی</span>
          <el-radio-group v-model="radio5" size="large">
            <el-radio-button label="مهم نیست" value="no_matter" />
            <el-radio-button label="ایرانی" value="persian" />
            <el-radio-button label="فرنگی" value="global" />
            <el-radio-button label="هردو" value="both" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">آسانسور</span>
          <el-radio-group v-model="radio6" size="large">
            <el-radio-button label="مهم نیست" value="no_matter" />
            <el-radio-button label="1" value="1" />
            <el-radio-button label="2" value="2" />
            <el-radio-button label="3+" value="3+" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">طبقه</span>
          <el-radio-group v-model="radio7" size="large">
            <el-radio-button label="مهم نیست" value="no_matter" />
            <el-radio-button label="همکف" value="ground" />
            <el-radio-button label="1" value="1" />
            <el-radio-button label="2" value="2" />
            <el-radio-button label="3" value="3" />
            <el-radio-button label="4" value="4" />
            <el-radio-button label="5+" value="5+" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">سیستم سرمایش</span>
          <el-radio-group v-model="radio8" size="large">
            <el-radio-button label="مهم نیست" value="no_matter" />
            <el-radio-button label="کولر آبی" value="water_conditioner" />
            <el-radio-button label="اسپلیت" value="split" />
            <el-radio-button label="فن کوئل" value="fan" />
            <el-radio-button label="چیلر" value="chiller" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">سیستم گرمایش</span>
          <el-radio-group v-model="radio9" size="large">
            <el-radio-button label="مهم نیست" value="no_matter" />
            <el-radio-button label="مرکزی" value="center" />
            <el-radio-button label="اسپلیت" value="split" />
            <el-radio-button label="شومینه" value="fireplace" />
            <el-radio-button label="از کف" value="floor" />
            <el-radio-button label="رادیاتور" value="radiator" />
          </el-radio-group>
        </div>
        <div class="flex flex-col gap-3">
          <span class="font-bold text-neutral-Gray-11">جنس کف</span>
          <el-radio-group v-model="radio10" size="large">
            <el-radio-button label="مهم نیست" value="no_matter" />
            <el-radio-button label="سنگ" value="stone" />
            <el-radio-button label="سرامیک" value="ceramic" />
            <el-radio-button label="پارکت" value="parquet" />
            <el-radio-button label="لمینت" value="laminate" />
            <el-radio-button label="موزائیک" value="mosaic" />
          </el-radio-group>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-center gap-4">
          <BaseButton
            label="حذف فیلترها"
            :variant="Variant.Outline"
            :color="Color.Primary"
            :size="Size.Lg"
            :type="Type.Button"
            :disabled="filterSelected"
            @click="resetFilters"
          />
          <BaseButton
            label="جست‌وجو"
            :variant="Variant.Solid"
            :color="Color.Primary"
            :size="Size.Lg"
            :type="Type.Button"
            :disabled="filterSelected"
          />
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { Color, Size, Variant, Type } from "@/types/enums/buttonEnums";

const dialogVisible = ref<boolean>(false);
const radio1 = ref<string>("");
const radio2 = ref<string>("");
const radio3 = ref<string>("");
const radio4 = ref<string>("");
const radio5 = ref<string>("");
const radio6 = ref<string>("");
const radio7 = ref<string>("");
const radio8 = ref<string>("");
const radio9 = ref<string>("");
const radio10 = ref<string>("");

const filterSelected = computed(() => {
  if (
    radio1.value.length > 0 ||
    radio2.value.length > 0 ||
    radio3.value.length > 0 ||
    radio4.value.length > 0 ||
    radio5.value.length > 0 ||
    radio6.value.length > 0 ||
    radio7.value.length > 0 ||
    radio8.value.length > 0 ||
    radio9.value.length > 0 ||
    radio10.value.length > 0
  )
    return false;
  else return true;
});

const resetFilters = () => {
  radio1.value = "";
  radio2.value = "";
  radio3.value = "";
  radio4.value = "";
  radio5.value = "";
  radio6.value = "";
  radio7.value = "";
  radio8.value = "";
  radio9.value = "";
  radio10.value = "";
};
</script>

<style scoped>
.custom-icon * {
  fill: inherit !important;
}

.el-radio-button:first-child .el-radio-button__inner {
  border-left: none !important;
}
</style>
