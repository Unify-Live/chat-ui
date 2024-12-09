<template>
  <n-virtual-list
    class="dialog-virtual-list"
    :items="dialogStore.returnFilterDialogs()"
    :item-size="64"
    item-resizable
    :key-field="'id'"
    style="max-height: 70vh"
  >
    <template #default="{ item: dialog }">
      <div
        class="dialog-item"
        :key="dialog.id"
        @click="dialogStore.selectActive(dialog)"
      >
        <DialogItem :dialog="dialog" />
      </div>
    </template>
  </n-virtual-list>
</template>

<script lang="ts" setup>
import DialogItem from "./DialogItem.vue";
import { useDialogStore } from "@/stores/dialog";

const dialogStore = useDialogStore();
</script>

<style scoped>
.dialog-virtual-list {
  width: 100%;
}

.dialog-item {
  box-sizing: border-box;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dialog-item:hover {
  background-color: rgba(0, 0, 0, 0.06);
}
</style>
