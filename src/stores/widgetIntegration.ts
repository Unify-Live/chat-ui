import { IntegrationsWidgetService, OpenAPI } from "@/client/backend";
import {
  WidgetIntegrationCreate,
  WidgetIntegrationConfig,
  WidgetIntegrationResponse,
} from "@/client/backend";
import { getBackendUrl } from "@/appConfig";
import { defineStore } from "pinia";
import { ref } from "vue";

OpenAPI.BASE = getBackendUrl();
OpenAPI.TOKEN = localStorage.getItem("userToken") || "";

export const useWidgetIntegrationStore = defineStore(
  "widgetIntegrationStore",
  () => {
    const newWidgetName = ref("");
    const newWidgetChatWindowTitle = ref("");
    const newWidgetAllowedDomain = ref("");
    const newWidgetWelcomeMessage = ref("");
    const projectUuid = ref("");
    const error = ref<string | null>(null);
    const isLoading = ref(false);

    async function createIntegration(): Promise<WidgetIntegrationResponse> {
      const widgetConfig: WidgetIntegrationConfig = {
        allowed_domain: newWidgetAllowedDomain.value,
        welcome_message: newWidgetWelcomeMessage.value,
        chat_window_title: newWidgetChatWindowTitle.value,
      };
      const newWidget: WidgetIntegrationCreate = {
        config: widgetConfig,
        name: newWidgetName.value,
        project_uuid: projectUuid.value,
      };
      const response = await IntegrationsWidgetService.createWidget(newWidget);

      // Reset form values on success
      newWidgetName.value = "";
      newWidgetChatWindowTitle.value = "";
      newWidgetAllowedDomain.value = "";
      newWidgetWelcomeMessage.value = "";

      return response;
    }

    return {
      newWidgetName,
      newWidgetChatWindowTitle,
      newWidgetAllowedDomain,
      newWidgetWelcomeMessage,
      projectUuid,
      createIntegration,
      error,
      isLoading,
    };
  },
);
