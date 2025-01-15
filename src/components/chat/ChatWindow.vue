<template>
  <div class="flex flex-1 flex-col">
    <ChatHeader />
    <div class="flex-1 bg-light-gray">
      <MessageList
        v-if="chatStore.chatOpened"
        :messages="chatStore.messagesList"
      />
      <div v-else>No dialog selected.</div>
    </div>
    <ChatInput />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ChatInput from "./ChatInput.vue";
import ChatMessage from "./ChatMessage.vue";
import MessageList from "./MessageList.vue";
import { useChatStore } from "@/stores/chat";
import ChatHeader from "./ChatHeader.vue";

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
