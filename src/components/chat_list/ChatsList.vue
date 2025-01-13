<template>
  <div class="h-screen overflow-hidden">
    <ChatSearch />

    <div class="h-screen">
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
            :class="{
              'bg-[#E5E7EB]': chatStore.selectedChat?.uuid === chat.uuid,
            }"
          >
            <ChatItem :chat="chat" />
          </n-card>
        </template>
      </n-virtual-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatItem from "./ChatItem.vue";
import { onMounted, ref } from "vue";
import { useChatStore } from "@/stores/chat";
import { ChatResponse } from "@/client/backend/models/ChatResponse";
import ChatSearch from "./ChatSearch.vue";

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
