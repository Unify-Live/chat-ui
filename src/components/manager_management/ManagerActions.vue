<template>
  <div class="w-full flex justify-center">
    <n-float-button-group
      shape="square"
      position="relative"
      :vertical="false"
      style="display: flex; flex-direction: row"
    >
      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-float-button @click="openEditModal">
            <n-icon><Cog /></n-icon>
          </n-float-button>
        </template>
        Редагувати
      </n-tooltip>

      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-float-button @click="handleDeleteConfirm(manager)">
            <n-icon><Trash /></n-icon>
          </n-float-button>
        </template>
        Видалити
      </n-tooltip>
    </n-float-button-group>

    <n-modal
      v-model:show="editManagerModalVisible"
      title="Редагувати менеджера"
    >
      <n-card
        style="width: 600px"
        :title="`Змінити роль менеджера ${managerStore.fullName}`"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-select
          :options="role_options"
          v-model:value="managerStore.initialRole"
          style="margin-bottom: 10px"
        >
        </n-select>
        <n-button
          type="error"
          style="margin-right: 4px"
          @click="cancelEditingManager"
          >Скасувати</n-button
        >
        <n-button
          type="primary"
          :disabled="!managerStore.haveRoleChanges"
          :loading="isEditingLoading"
          @click="handleEditManager"
        >
          Зберегти
        </n-button>
      </n-card>
      <!-- <span>Посада</span> -->
      <!-- <n-input v-model="manager.role" /> -->
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { Trash, Cog } from "@vicons/ionicons5";
import { useMessage, useDialog } from "naive-ui";
import { ref, Ref } from "vue";
import type { Manager } from "@/types";
import { role_options } from "@/stores/manager";
import { useEditManagerStore } from "@/stores/manager";

const managerStore = useEditManagerStore();
const editManagerModalVisible: Ref<boolean> = ref(false);
const isEditingLoading: Ref<boolean> = ref(false);
const message = useMessage();
const dialog = useDialog();

const props = defineProps<{
  manager: Manager;
}>();

async function openEditModal() {
  managerStore.setInitialValues(props.manager);
  editManagerModalVisible.value = true;
}

async function cancelEditingManager() {
  managerStore.reset();
  managerStore.setInitialValues(props.manager);
  editManagerModalVisible.value = false;
}

async function handleEditManager() {
  isEditingLoading.value = true;
  // await managerStore.editManager();
  message.success("Менеджера успішно відредаговано");
  isEditingLoading.value = false;
  editManagerModalVisible.value = false;
}

async function handleDeleteConfirm(manager: Manager) {
  const isDeleting = ref(false);

  dialog.warning({
    title: "Видалити менеджера",
    content: `Ви впевнені, що хочете видалити менеджера ${manager.fullName} з проекту ${manager.projectId}. Він відразу ж втратить до нього доступ.`,
    positiveText: "Видалити",
    negativeText: "Скасувати",
    positiveButtonProps: {
      loading: isDeleting.value,
    },
    async onPositiveClick() {
      isDeleting.value = true;
      message.success("Менеджер успішно видалено");
      isDeleting.value = false;
    },
    onNegativeClick: () => {
      isDeleting.value = false;
    },
  });
}
</script>
