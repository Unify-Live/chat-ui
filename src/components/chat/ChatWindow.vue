<template>
  <div class="odd: flex h-screen flex-1 flex-col overflow-hidden">
    <ChatHeader />
    <div class="flex-1 overflow-y-hidden bg-light-gray">
      <MessageList
        v-if="chatStore.chatOpened"
        :messages="chatStore.messagesList"
      />
      <div v-else>No dialog selected.</div>
    </div>
    <ChatInput />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ChatInput from "./ChatInput.vue";
import MessageList from "./MessageList.vue";
import { useChatStore } from "@/stores/chat";
import ChatHeader from "./ChatHeader.vue";

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
