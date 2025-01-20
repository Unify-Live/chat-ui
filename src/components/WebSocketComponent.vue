<template>
  <div class="p-4">
    <div class="mb-4">
      <p>Status: {{ isConnected ? "Connected" : "Disconnected" }}</p>
    </div>

    <!-- Messages List -->
    <div class="mb-4 h-64 overflow-y-auto rounded border p-2">
      <div v-for="(message, index) in messages" :key="index" class="mb-2">
        {{ message }}
      </div>
    </div>

    <!-- Message Input -->
    <div class="flex gap-2">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        type="text"
        class="flex-grow rounded border p-2"
        placeholder="Type a message..."
      />
      <button
        @click="sendMessage"
        class="rounded bg-blue-500 px-4 py-2 text-white"
        :disabled="!isConnected"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useWebSocketStore } from "@/stores/websocket";
import { useUserStore } from "@/stores/user";

const webSocketStore = useWebSocketStore();
const userStore = useUserStore();
const newMessage = ref("");

const { isConnected, messages } = webSocketStore;

onMounted(() => {
  // Connect using the user's token
  if (userStore.user.token) {
    webSocketStore.connect(userStore.user.token);
  }
});

onUnmounted(() => {
  webSocketStore.disconnect();
});

const sendMessage = () => {
  if (newMessage.value.trim()) {
    webSocketStore.sendMessage(newMessage.value);
    newMessage.value = "";
  }
};
</script>
