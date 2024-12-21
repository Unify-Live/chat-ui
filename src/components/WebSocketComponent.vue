<template>
  <div class="p-4">
    <div class="mb-4">
      <p>Status: {{ isConnected ? "Connected" : "Disconnected" }}</p>
    </div>

    <!-- Messages List -->
    <div class="mb-4 h-64 overflow-y-auto border p-2 rounded">
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
        class="border p-2 rounded flex-grow"
        placeholder="Type a message..."
      />
      <button
        @click="sendMessage"
        class="px-4 py-2 bg-blue-500 text-white rounded"
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
