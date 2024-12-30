<template>
  <div class="chat-window">
    <ChatHeader />
    <div class="chat-content">
      <MessageList
        v-if="chatStore.chatOpened"
        :messages="chatStore.messagesList"
      />
      <div v-else class="empty-state">No dialog selected.</div>
    </div>
    Typing: {{ chatStore.clientTypingText }}
    <ChatInput />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ChatInput from "./ChatInput.vue";
import ChatMessage from "./ChatMessage.vue";
import MessageList from "./MessageList.vue";
import { useChatStore } from "@/stores/chat";

const newMessage = ref("");
const messagesRef = ref(null);
const chatStore = useChatStore();

// Props
const props = defineProps({
  selectedChatUuid: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  chatStore.fetchMessagesList(props.selectedChatUuid);
});
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 90%;
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
