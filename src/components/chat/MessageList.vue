<template>
  <div ref="swipeRef" class="message-list-container" :style="swipeStyle">
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
import { ref, computed } from "vue";
import { useSwipe } from "@vueuse/core";
import { Message } from "@/types";
import ChatMessage from "./ChatMessage.vue";
import { useDialogStore } from "@/stores/dialog";

defineProps<{
  messages: Message[];
}>();

const dialogStore = useDialogStore();
const swipeRef = ref<HTMLElement | null>(null);

// Swipe handling
const { isSwiping, direction, lengthX } = useSwipe(swipeRef, {
  threshold: 50,
  onSwipeEnd() {
    if (direction.value === "right" && Math.abs(lengthX.value) > 100) {
      // Go back to dialog list
      dialogStore.dialogOpened = false;
    }
  },
});

// Compute swipe animation style
const swipeStyle = computed(() => {
  if (!isSwiping.value) return {};

  // Only allow right swipe
  if (lengthX.value < 0) return {};

  return {
    transition: lengthX.value === 0 ? "transform 0.3s ease-out" : "none",
    transform: `translateX(${lengthX.value}px)`,
  };
});
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
