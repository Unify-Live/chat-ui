<template>
  <div ref="swipeRef">
    <
    <n-virtual-list
      v-if="chatStore.messagesList.length > 0"
      :items="chatStore.messagesList"
      :item-size="10"
      item-resizable
      :key-field="'uuid'"
      style="max-height: 500px"
    >
      <template #default="{ item: message }">
        <div class="mb-4">
          <ChatMessage :message="message" />
        </div>
      </template>
    </n-virtual-list>
    <div v-else>No messages yet.</div>
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from "@/stores/chat";
import ChatMessage from "./ChatMessage.vue";

const chatStore = useChatStore();
</script>

<style scoped></style>
