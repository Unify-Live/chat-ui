<template>
  <div ref="swipeRef" class="message-list-container">
    <n-scrollbar>
      <n-virtual-list
        v-if="messages.length"
        class="message-virtual-list"
        :items="messages"
        :item-size="64"
        item-resizable
        :key-field="'id'"
      >
        <template #default="{ item: message }">
          <div class="message-item">
            <ChatMessage :message="message" />
          </div>
        </template>
      </n-virtual-list>
      <div v-else class="empty-state">No messages yet.</div>
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { Message } from "@/types";
import ChatMessage from "./ChatMessage.vue";

defineProps<{
  messages: Message[];
}>();
</script>

<style scoped>
.message-list-container {
  height: 100%;
  position: relative;
  will-change: transform;
  touch-action: pan-y pinch-zoom;
}

.message-virtual-list {
  width: 100%;
  padding: 1rem;
}

.message-item {
  margin-bottom: 0.5rem;
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  color: #999;
}
</style>
