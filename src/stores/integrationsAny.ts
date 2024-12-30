import { IntegrationResponse } from "@/client/backend";
import { IntegrationsCoreService, OpenAPI } from "@/client/backend";
import { getBackendUrl } from "@/appConfig";
import { defineStore } from "pinia";
import { ref } from "vue";

OpenAPI.BASE = getBackendUrl();
OpenAPI.TOKEN = localStorage.getItem("userToken") || "";

export const useIntegrationsAnyStore = defineStore(
  "integrationsAnyStore",
  () => {
    const integrationsList = ref<IntegrationResponse[]>([]);
    const isLoading = ref(false);

    async function fetchIntegrations(projectUuid: string) {
      isLoading.value = true;
      try {
        const response =
          await IntegrationsCoreService.getProjectIntegrationList(projectUuid);
        integrationsList.value = response.items;
      } catch (error) {
        console.error("Getting integrations list:", error);
      } finally {
        isLoading.value = false;
      }
    }

    return {
      integrationsList,
      fetchIntegrations,
      isLoading,
    };
  },
);
