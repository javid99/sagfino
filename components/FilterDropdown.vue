<template>
  <div>
    <el-dropdown
      ref="dropdown1"
      trigger="click"
      popper-class="custom-dropdown"
      placement="bottom-end"
    >
      <button
        class="group flex items-center justify-between gap-2 rounded-lg border border-neutral-Gray-7 px-4 py-2 text-neutral-Gray-10 hover:border-neutral-Gray-3 hover:bg-neutral-Gray-3 aria-expanded:border-info-blue aria-expanded:shadow-[0px_0px_0px_4px_rgba(47,128,237,0.19)]"
      >
        <Icon name="my-iconsax:sort" class="transition-all" size="24" />
        <span class="text-xs font-medium">{{ filterValue }}</span>
        <Icon
          name="my-iconsax:arrow-down-1"
          class="transition-all group-aria-expanded:rotate-180"
          size="24"
        />
      </button>
      <template #dropdown>
        <ul class="filter-dropdown-menu flex flex-col gap-1">
          <li
            class="inline-flex text-neutral-Gray-11 hover:text-primary-default"
          >
            <button class="flex-1 text-start" @click="sortFilter('جدیدترین')">
              جدید ترین
            </button>
          </li>
          <li
            class="inline-flex text-neutral-Gray-11 hover:text-primary-default"
          >
            <button
              class="flex-1 text-start"
              @click="sortFilter('قرارداد فوری')"
            >
              قرارداد فوری
            </button>
          </li>
        </ul>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
const filterValue = ref<string>("جدید ترین");
import type { DropdownInstance } from "element-plus";

const emit = defineEmits(["filterValue"]);

const dropdown1 = ref<DropdownInstance>();

const sortFilter = (value: string) => {
  filterValue.value = value;
  emit("filterValue");
  dropdown1.value?.handleClose();
};
</script>

<style scoped>
.custom-dropdown .filter-dropdown-menu li {
  min-width: 7.5rem;
}
</style>
