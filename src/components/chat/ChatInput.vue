<template>
  <div class="chat-input">
    <input
      v-model="message_text"
      type="text"
      placeholder="Type a message..."
      class="message-input"
    />
    <button @click="sendMessage" class="send-button">
      <n-icon>
        <SendOutline />
      </n-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "naive-ui";
import {  SendOutline } from "@vicons/ionicons5";
import { useWebSocketStore } from "@/stores/websocket";
const message = useMessage();
const message_text = ref("");
const webSocketStore = useWebSocketStore();

async function sendMessage() {
  if (message_text.value.trim() !== "") {
    webSocketStore.sendMessage(message_text.value);
    message.success("Message sent:");
    message_text.value = "";
  } else {
    message.error("Message cannot be empty");
  }
}
</script>

<style scoped>
.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: rgb(24, 24, 28);
}

.attachments-button,
.emoji-button,
.send-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin: 0 5px;
  color: aquamarine;
}

.message-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 0 10px;
}
</style>
