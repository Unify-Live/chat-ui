<template>
  <h1>Integrations</h1>

  <n-space justify="space-between" align="center" class="header-space">
    <n-button @click="openModal" type="primary">
      <n-icon><Add /></n-icon>
      New telegram integration
    </n-button>
  </n-space>

  <n-modal
    v-model:show="showModal"
    title="Create new telegram integration"
    @update:show="cancelProjectCreation"
  >
    <n-card
      style="width: 600px"
      title="Create Project"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      ><n-form label-placement="top">
        <n-form-item label="Відображуване ім'я інтеграції">
          <n-input v-model:value="telegramIntegrationStore.integrationName" />
        </n-form-item>
        <n-form-item label="Токен бот">
          <n-input v-model:value="telegramIntegrationStore.newBotToken" />
        </n-form-item>
        <n-form-item label="TEMP значення uuid проекту">
          <n-input v-model:value="telegramIntegrationStore.projectUuid" />
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
          <n-button
            type="primary"
            @click="handleCreateProject"
            :loading="isLoading"
          >
            Save
          </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { useTelegramIntegrationStore } from "@/stores/telegramIntegration";
import { ref } from "vue";
import { useMessage } from "naive-ui";

const message = useMessage();
const showModal = ref(false);
const isLoading = ref(false);

const telegramIntegrationStore = useTelegramIntegrationStore();

const openModal = () => {
  showModal.value = true;
  console.log("open modal");
};

const cancelProjectCreation = () => {
  showModal.value = false;
};

const handleCreateProject = async () => {
  isLoading.value = true;
  try {
    const success = await telegramIntegrationStore.createIntegration();

    if (success) {
      message.success("Telegram integration created successfully");
      showModal.value = false;
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
