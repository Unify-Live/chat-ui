import { IntegrationsTelegramService, OpenAPI } from "@/client/backend";
import { TelegramIntegrationResponse } from "@/client/backend/models/TelegramIntegrationResponse";
import { getBackendUrl } from "@/appConfig";
import { defineStore } from "pinia";
import { ref } from "vue";

OpenAPI.BASE = getBackendUrl();
OpenAPI.TOKEN = localStorage.getItem("userToken") || "";

export const useTelegramIntegrationStore = defineStore(
  "telegramIntegrationStore",
  () => {
    const newBotToken = ref("");
    const newBotGreetingsMessage = ref("");
    const askMobileNumber = ref(false);
    const integrationName = ref("");
    const projectUuid = ref("");
    const error = ref<string | null>(null);
    const isLoading = ref(false);

    async function createIntegration(): Promise<TelegramIntegrationResponse> {
      const response = await IntegrationsTelegramService.createTelegram({
        bot_token: newBotToken.value,
        greetings_message_text: newBotGreetingsMessage.value,
        ask_for_phone_number: askMobileNumber.value,
        name: integrationName.value,
        project_uuid: projectUuid.value,
      });

      // Reset form values on success
      newBotToken.value = "";
      newBotGreetingsMessage.value = "";
      askMobileNumber.value = false;
      integrationName.value = "";
      projectUuid.value = "";

      return response;
    }

    return {
      newBotToken,
      newBotGreetingsMessage,
      askMobileNumber,
      integrationName,
      projectUuid,
      createIntegration,
      error,
      isLoading,
    };
  },
);
