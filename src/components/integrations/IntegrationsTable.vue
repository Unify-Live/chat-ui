<template>
  <n-data-table
    :data="integrationsStore.integrationsList"
    :columns="columns"
    :loading="integrationsStore.isLoading"
    empty-text="No integrations"
  >
  </n-data-table>
</template>

<script lang="ts" setup>
import { useIntegrationsAnyStore } from "@/stores/integrationsAny";
import { onMounted } from "vue";

const integrationsStore = useIntegrationsAnyStore();

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  integrationsStore.fetchIntegrations(props.projectId);
});

const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Type",
    key: "type",
  },
  {
    title: "Uuid",
    key: "uuid",
  },
];
</script>
