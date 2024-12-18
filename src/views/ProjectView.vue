<template>
  <ChatView />
  <IntegrationsView />
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import ChatView from "@/views/ChatView.vue";
import IntegrationsView from "@/views/IntegrationsView.vue";

// Lifecycle hooks
onMounted(() => {
});
</script>

<style scoped>
</style>
