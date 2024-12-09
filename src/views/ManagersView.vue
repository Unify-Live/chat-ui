<template>
  <div class="m-auto max-w-85" id="main">
    <ManagerTable :projectId="projectId" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import ManagerTable from "@/components/manager_management/ManagerTable.vue";

const route = useRoute();
const projectId = computed(() => Number(route.params.id));
</script>
