<template>
  <div class="border-t">
    <p class="mt-2">Typing: {{ chatStore.clientTypingText }}</p>
    <div class="flex items-center gap-3 p-4">
      <input
        v-model="message_text"
        type="text"
        placeholder="Type a message..."
        class="flex-1 rounded-md border p-2"
      />
      <button @click="sendMessage" class="size-7 rounded-md bg-primary">
        <n-icon size="">
          <SendLogo />
        </n-icon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "naive-ui";
import { MessageCreate } from "@/client/backend";
import { useWebSocketStore } from "@/stores/websocket";
import { useChatStore } from "@/stores/chat";
import SendLogo from "@/components/logos/SendLogo.vue";
const message = useMessage();
const message_text = ref("");
const webSocketStore = useWebSocketStore();
const chatStore = useChatStore();

async function sendMessage() {
  if (!chatStore.selectedChat) {
    message.error("No chat selected");
    return;
  }

  const newMessage: MessageCreate = {
    content: message_text.value,
    chat_uuid: chatStore.selectedChat?.uuid,
  };
  if (message_text.value.trim() !== "") {
    webSocketStore.sendMessage(newMessage);
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
