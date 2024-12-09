<template>
  <div class="chat-window">
    <ChatHeader />
    <div class="chat-content">
      <MessageList v-if="dialogStore.dialogOpened" :messages="messages" />
      <div v-else class="empty-state">No dialog selected.</div>
    </div>
    <ChatInput />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ChatInput from "./ChatInput.vue";
import ChatMessage from "./ChatMessage.vue";
import { messageMockList } from "@/stores/dialog";
import MessageList from "./MessageList.vue";
import { useDialogStore } from "@/stores/dialog";

// Props
const props = defineProps({
  dialogId: {
    type: String,
    required: false,
  },
});

// Refs
const messages = ref(messageMockList);
const newMessage = ref("");
const messagesRef = ref(null);
const dialogStore = useDialogStore();
// Methods
const scrollToBottom = () => {
  const messagesContainer = messagesRef.value;
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
};

// If you need to expose methods to parent components
defineExpose({
  scrollToBottom,
});
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  border: 1px solid #ccc;
}

.chat-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.empty-state {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
}

.chat-input {
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
