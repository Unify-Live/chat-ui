<template>
  <n-virtual-list
    :items="chatStore.chatList"
    :item-size="64"
    item-resizable
    :key-field="'id'"
  >
    <template #default="{ item: chat }">
      <n-card
        hoverable
        @click="openChat(chat)"
        class="cursor-pointer"
        :embedded="chatStore.selectedChat?.uuid === chat.uuid"
      >
        <ChatItem :chat="chat" />
      </n-card>
    </template>
  </n-virtual-list>
</template>

<script lang="ts" setup>
import ChatItem from "./ChatItem.vue";
import { onMounted, ref } from "vue";
import { useChatStore } from "@/stores/chat";
import { ChatResponse } from "@/client/backend/models/ChatResponse";

const chatStore = useChatStore();
const isLoading = ref(true);
const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

function openChat(chat: ChatResponse) {
  chatStore.chatOpened = true;
  chatStore.selectedChat = chat;
  chatStore.clientTypingText = "";
  chatStore.fetchMessagesList(chat.uuid);
  console.log("Chat opened", chat);
}

onMounted(() => {
  chatStore.fetchChats(props.projectId);

  isLoading.value = false;
});
</script>
