<template>
  <div class="container mb-96 mt-4 flex flex-col gap-8">
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
      <SearchboxTab :disabled="false" />
    </div>

    <!-- SECTION Simple inputs -->
    <div class="flex flex-wrap gap-6">
      <baseInput
        :type="inputType.text"
        placeholder="شماره موبایل"
        icon-right="arrow-right"
        name="name"
        icon-left="arrow-square-left"
        :disabled="false"
        :is-invalid="false"
      />
    </div>

    <!-- SECTION Simple select -->
    <div class="flex">
      <el-select
        v-model="value"
        class="custom-select"
        popper-class="custom-select-dropdown"
        placeholder="انتخاب کنید"
        size="large"
        style="width: 7rem"
        placement="bottom-end"
        clearable
        multiple
        :collapse-tags="true"
        no-data-text="گزینه ای وجود ندارد"
        @change="inputSelected = true"
        @focus="inputSelected = false"
        @clear="inputSelected = false"
        :class="inputSelected ? 'selected' : ''"
      >
        <template #header>
          <baseInput
            :type="inputType.text"
            v-model="selectSearch"
            placeholder="جستجو"
            :disabled="false"
            :is-invalid="false"
          />
        </template>
        <el-option
          v-for="item in filteredItems"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          class="group flex items-center !px-4 [&.is-hovering]:!bg-neutral-Gray-3 [&.is-selected]:!bg-primary-Tint-1 [&.is-selected]:!font-normal"
        >
          <span
            class="ml-2 inline-block size-5 rounded border border-neutral-Gray-7 bg-white bg-cover bg-center group-[.is-selected]:border-0 group-[.is-selected]:bg-[url(./images/Checkbox.svg)]"
          ></span>
          <span class="text-neutral-Gray-11">{{ item.label }}</span>
        </el-option>
        <template #footer>
          <div class="flex gap-2">
            <BaseButton
              label="حذف"
              :variant="Variant.Outline"
              :color="Color.Gray"
              class="flex-1"
              @click="clearOptions"
              :disabled="true"
            />
            <BaseButton
              label="انتخاب"
              :variant="Variant.Outline"
              :color="Color.Gray"
              class="flex-1"
              @click="selectOptions"
              :disabled="true"
            />
          </div>
        </template>
      </el-select>
    </div>

    <!-- SECTION Price selection dropdown -->
    <div class="flex">
      <PriceDropdown />
    </div>

    <!-- SECTION Area selection dropdown -->
    <div class="flex">
      <AreaDropdown />
    </div>

    <!-- SECTION Filter selection dropdown -->
    <div class="flex">
      <FilterDropdown />
    </div>

    <!-- SECTION Labeled Input -->
    <div class="flex">
      <LabeledInput
        label="تیتر"
        name="test"
        placeholder="عنوان"
        type="text"
        :disabled="false"
        :is-invalid="inputValid"
        @focused="inputValid = false"
        error-message="پر کردن این قسمت اجباری است"
        v-model="testInput"
      />
    </div>

    <!-- SECTION More filters -->
    <MoreFilters />

    <!-- SECTION Pagination -->
    <el-pagination
      dir="ltr"
      background
      layout="prev, pager, next"
      :total="1000"
    />

    <!-- SECTION Login Inputs -->
    <div class="flex">
      <LoginInput
        placeholder="نام خود را وارد کنید (اختیاری)"
        label="نام"
        icon="user"
        :type="inputType.text"
        name="name"
        :error="invalid"
        error-messages="پر کردن این قسمت اجباری است"
        @update:error="invalid = $event"
      />
    </div>

    <!-- SECTION Main Header -->
    <MainHeader color="gray" />
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "#components";
import { Color, Size, Type, Variant } from "@/types/enums/buttonEnums";
import { inputType } from "@/types/enums/inputEnums";
import type { CheckboxValueType } from "element-plus";

useHead({
  title: "کامپوننت ها",
});
const invalid = ref<boolean>(true);
const inputSelected = ref<boolean>(false);
const value = ref<CheckboxValueType[]>([]);
const selectSearch = ref<string>("");

const inputValid = ref<boolean>(true);
const testInput = ref<string>("");

const options = ref<{ value: string; label: string; disabled?: boolean }[]>([
  {
    value: "عنوان 1",
    label: "عنوان 1",
  },
  {
    value: "عنوان 2",
    label: "عنوان 2",
  },
  {
    value: "عنوان 3",
    label: "عنوان 3",
  },
  {
    value: "عنوان 4",
    label: "عنوان 4",
  },
  {
    value: "عنوان 5",
    label: "عنوان 5",
  },
]);

const filteredItems = computed(() => {
  return options.value.filter((item) =>
    item.label.toLowerCase().includes(selectSearch.value.toLowerCase()),
  );
});

const selectOptions = (val: CheckboxValueType) => {
  if (val) {
    value.value = options.value.map((_) => _.value);
  } else {
    value.value = [];
  }
};

const clearOptions = () => {
  value.value = [];
  selectSearch.value = "";
};
</script>

<style>
.custom-select .el-select__wrapper {
  text-align: right;
  min-height: 3rem;
  font-size: 1rem;
  box-shadow: none !important;
  border: 1px solid #adadad;
  border-radius: 0.5rem;
}

.custom-select .el-select__wrapper:hover {
  border-color: #ededed;
  background-color: #ededed;
}

.custom-select .el-select__wrapper.is-focused {
  border-color: #409eff;
  box-shadow: 0px 0px 0px 4px rgba(47, 128, 237, 0.19) !important;
}

.custom-select .el-select__placeholder {
  color: #505050;
}

.custom-select .el-select__caret {
  font-size: 1.25rem;
  color: #505050;
}

.el-popper__arrow,
.el-popper__arrow:before {
  display: none;
}

.custom-select-dropdown {
  min-width: 200px;
  border-color: #409eff !important;
  border-radius: 0.5rem;
  box-shadow: none !important;
}

.custom-select.selected .el-select__wrapper {
  border-color: #353535;
  box-shadow: none !important;
}

.custom-select.selected .el-select__placeholder {
  color: #353535;
}

.custom-select-dropdown .el-select-dropdown__header {
  border-bottom: none;
  padding: 1rem 1rem 0.5rem 1rem;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.is-selected:after {
  display: none;
}

.el-radio-button:first-child .el-radio-button__inner {
  border-left: none !important;
  border-radius: 0 0.5rem 0.5rem 0;
}

.el-radio-button:last-child .el-radio-button__inner {
  border-left: 1px solid #d9d9d9;
  border-radius: 0.5rem 0 0 0.5rem;
}

.el-radio-button__inner {
  border-color: #d9d9d9;
  color: #505050;
  padding: 0.75rem 1.75rem !important;
}

.el-radio-button__inner:hover {
  color: #505050;
  background-color: #ededed;
}

.el-radio-button.is-active
  .el-radio-button__original-radio:not(:disabled)
  + .el-radio-button__inner {
  background-color: #cb1b1b;
  border-color: #d9d9d9;
}

.el-dialog__footer {
  padding: 1.5rem 0;
}

.el-pagination.is-background button {
  background-color: transparent !important;
  padding: 0;
  min-width: 1.5rem;
  height: 1.5rem;
}

.el-pagination.is-background button:disabled {
  background-color: transparent !important;
  padding: 0;
}

.el-pagination.is-background button .el-icon {
  font-size: 1.5rem;
}

.el-pagination.is-background button svg path {
  fill: #0c0c0c;
}

.el-pagination.is-background button:disabled svg path {
  fill: #cbcbcb;
}

.el-pagination.is-background .btn-prev {
  margin: 0 0.375rem;
}

.el-pagination.is-background .el-pager li {
  margin: 0 0.375rem;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 0.5rem;
  color: #121212;
  font-weight: 500;
}

.el-pagination.is-background .el-pager li.is-active {
  background-color: #fff;
  border-color: #2f80ed;
  box-shadow: 0px 0px 0px 3px rgba(0, 133, 255, 0.19);
  color: #2f80ed;
}
</style>
