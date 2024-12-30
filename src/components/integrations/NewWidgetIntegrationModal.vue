<template>
  <n-modal
    v-model:show="props.show"
    title="Create new telegram integration"
    @update:show="handleCancel"
  >
    <n-card
      style="width: 600px"
      title="Create Project"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-form label-placement="top">
        <n-form-item label="Відображуване ім'я інтеграції">
          <n-input v-model:value="widgetIntegrationStore.newWidgetName" />
        </n-form-item>
        <n-form-item label="Назва вікна чату">
          <n-input
            v-model:value="widgetIntegrationStore.newWidgetChatWindowTitle"
          />
        </n-form-item>
        <n-form-item label="Домен вашого сайту">
          <n-input
            v-model:value="widgetIntegrationStore.newWidgetAllowedDomain"
          />
        </n-form-item>
        <n-form-item label="Перше привітальне повідомлення для вашого клієнта">
          <n-input
            v-model:value="widgetIntegrationStore.newWidgetWelcomeMessage"
          />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="handleCreate" :loading="isLoading">
            Save
          </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "naive-ui";
import { useWidgetIntegrationStore } from "@/stores/widgetIntegration";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:show", "created"]);

const message = useMessage();
const isLoading = ref(false);
const widgetIntegrationStore = useWidgetIntegrationStore();

widgetIntegrationStore.projectUuid = props.projectId;

const handleCancel = () => {
  emit("update:show", false);
};

const handleCreate = async () => {
  isLoading.value = true;
  try {
    await widgetIntegrationStore.createIntegration();
    message.success("Widget integration created");
    emit("update:show", false);
    emit("created");
  } catch (error) {
    message.error("Failed to create widget integration");
  } finally {
    isLoading.value = false;
  }
};
</script>
