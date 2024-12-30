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
          <n-input v-model:value="telegramIntegrationStore.integrationName" />
        </n-form-item>
        <n-form-item label="Токен бот">
          <n-input v-model:value="telegramIntegrationStore.newBotToken" />
        </n-form-item>
        <n-form-item label="Запитуйте номер мобільного">
          <n-switch v-model:value="telegramIntegrationStore.askMobileNumber" />
        </n-form-item>
        <n-form-item label="Перше привітальне повідомлення для вашого клієнта">
          <n-input
            v-model:value="telegramIntegrationStore.newBotGreetingsMessage"
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

<script lang="ts" setup>
import { ref } from "vue";
import { useMessage } from "naive-ui";
import { useTelegramIntegrationStore } from "@/stores/telegramIntegration";

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
const telegramIntegrationStore = useTelegramIntegrationStore();

telegramIntegrationStore.projectUuid = props.projectId;

const handleCancel = () => {
  emit("update:show", false);
};

const handleCreate = async () => {
  isLoading.value = true;
  try {
    const success = await telegramIntegrationStore.createIntegration();
    if (success) {
      message.success("Telegram integration created successfully");
      emit("created");
      handleCancel();
    } else if (telegramIntegrationStore.error) {
      message.error(telegramIntegrationStore.error);
    }
  } catch (error) {
    message.error("Failed to create telegram integration");
    console.error(error);
  }
  isLoading.value = false;
};
</script>
