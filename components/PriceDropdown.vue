<template>
  <div>
    <el-dropdown
      ref="dropdown1"
      trigger="click"
      popper-class="custom-dropdown"
      placement="bottom-end"
    >
      <button
        class="group flex items-center justify-between gap-2 rounded-lg border border-neutral-Gray-7 px-4 py-3 text-neutral-Gray-10 hover:border-neutral-Gray-3 hover:bg-neutral-Gray-3 aria-expanded:border-info-blue aria-expanded:shadow-[0px_0px_0px_4px_rgba(47,128,237,0.19)]"
      >
        <span>قیمت</span>
        <Icon
          name="my-iconsax:arrow-down-1"
          class="transition-all group-aria-expanded:rotate-180"
          size="20"
        />
      </button>
      <template #dropdown>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-3">
            <span class="text-sm font-medium">رهن</span>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-3">
                <span class="text-sm font-medium">از</span>
                <BaseInput
                  placeholder="مثلا ۱۰۰.۰۰۰.۰۰۰ تومان"
                  v-model="mortgageFrom"
                />
              </div>
              <div class="flex items-center gap-3">
                <span class="text-sm font-medium">تا</span>
                <BaseInput
                  placeholder="مثلا ۱۰۰.۰۰۰.۰۰۰ تومان"
                  v-model="mortgageTo"
                />
              </div>
            </div>
            <span class="text-sm font-medium">اجاره</span>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-3">
                <span class="text-sm font-medium">از</span>
                <BaseInput
                  placeholder="مثلا ۱۰۰.۰۰۰.۰۰۰ تومان"
                  v-model="rentFrom"
                />
              </div>
              <div class="flex items-center gap-3">
                <span class="text-sm font-medium">تا</span>
                <BaseInput
                  placeholder="مثلا ۱۰۰.۰۰۰.۰۰۰ تومان"
                  v-model="rentTo"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-2">
            <BaseButton
              label="حذف"
              :variant="Variant.Outline"
              :color="Color.Gray"
              class="flex-1"
              @click="clearInputs"
            />
            <BaseButton
              label="جستجو"
              :variant="Variant.Outline"
              :color="Color.Gray"
              class="flex-1"
              @click="filter"
            />
          </div>
        </div>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { Color, Size, Type, Variant } from "@/types/enums/buttonEnums";
import type { DropdownInstance } from "element-plus";

const dropdown1 = ref<DropdownInstance>();

const rentFrom = ref<string>("");
const rentTo = ref<string>("");
const mortgageFrom = ref<string>("");
const mortgageTo = ref<string>("");

const emit = defineEmits(["dropdownFilter"]);

const clearInputs = () => {
  rentFrom.value = "";
  rentTo.value = "";
  mortgageFrom.value = "";
  mortgageTo.value = "";
};

const filter = () => {
  emit("dropdownFilter");
  dropdown1.value?.handleClose();
};
</script>

<style>
.custom-dropdown.el-dropdown__popper.el-popper {
  border: 1px solid #2f80ed;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: none;
}
</style>
