<template>
  <h1>Integrations</h1>
  <IntegrationsTable :projectId="projectId!" />
  <n-space align="center" class="header-space">
    <n-button @click="showTelegramModal = true" type="primary">
      <n-icon><Add /></n-icon>
      New telegram integration
    </n-button>
    <n-button @click="showWidgetModal = true" type="primary">
      <n-icon><Add /></n-icon>
      New widget integration
    </n-button>
  </n-space>

  <NewTelegramIntegrationModal
    v-model:show="showTelegramModal"
    :projectId="projectId!"
    @created="handleIntegrationCreated"
  />
  <NewWidgetIntegrationModal
    v-model:show="showWidgetModal"
    :projectId="projectId!"
    @created="handleIntegrationCreated"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Add } from "@vicons/ionicons5";
import IntegrationsTable from "@/components/integrations/IntegrationsTable.vue";
import NewTelegramIntegrationModal from "@/components/integrations/NewTelegramIntegrationModal.vue";
import NewWidgetIntegrationModal from "@/components/integrations/NewWidgetIntegrationModal.vue";
import { useIntegrationsAnyStore } from "@/stores/integrationsAny";
import { useUserStore } from "@/stores/user";
import { useMessage } from "naive-ui";
import { useRouter } from "vue-router";

const integrationsStore = useIntegrationsAnyStore();
const userStore = useUserStore();
const message = useMessage();
const showTelegramModal = ref(false);
const showWidgetModal = ref(false);
const router = useRouter();

const projectId = userStore.getSelectedProjectUuid();

const handleIntegrationCreated = () => {
  if (!projectId) {
    message.warning("Ви не вибрали проект, виберіть його");
    router.push("/projects");
    return;
  }

  integrationsStore.fetchIntegrations(projectId);
};
</script>
