<template>
  <h1>Integrations</h1>
  <IntegrationsTable :projectId="props.projectId" />
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
    :projectId="props.projectId"
    @created="handleIntegrationCreated"
  />
  <NewWidgetIntegrationModal
    v-model:show="showWidgetModal"
    :projectId="props.projectId"
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

const integrationsStore = useIntegrationsAnyStore();

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

const showTelegramModal = ref(false);
const showWidgetModal = ref(false);

const handleIntegrationCreated = () => {
  integrationsStore.fetchIntegrations(props.projectId);
};
</script>
