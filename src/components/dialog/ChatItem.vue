<template>
  <n-card
    class="chat-message"
    :bordered="false"
    hoverable
    size="small"
    @click="openChat(chat)"
  >
    <n-space align="start" justify="space-between" :wrap="false">
      <!-- Left side with avatar and content -->
      <n-space :wrap="false">
        <n-space vertical :wrap="false">
          <span class="username">{{ chat.title }}</span>
          <span class="message"> LAST MESSAGE </span>
        </n-space>
      </n-space>

      <!-- Right side -->
      <n-space vertical align="end" :wrap="false">
        <span class="time">{{ chat.last_message_at }}</span>
        <!-- <n-badge
          v-if="dialog.unreadCount! > 0"
          :value="dialog.unreadCount"
          type="success"
        /> -->
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts" setup>
import { ChatResponse } from "@/client/backend/models/ChatResponse";
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();

function openChat(chat: ChatResponse) {
  chatStore.chatOpened = true;
  chatStore.selectedChat = chat;
  chatStore.clientTypingText = "";
  chatStore.fetchMessagesList(chat.uuid);
  console.log("Chat opened", chat);
}

defineProps<{
  chat: ChatResponse;
}>();
</script>
