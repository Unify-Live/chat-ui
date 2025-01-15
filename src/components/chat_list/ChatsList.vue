<template>
  <div class="grid w-full grid-rows-[auto,1fr] md:h-screen">
    <!-- Search bar -->
    <ChatSearch />

    <!-- Chat list -->
    <div class="overflow-y-auto">
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
              'bg-light-gray': chatStore.selectedChat?.uuid === chat.uuid,
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
import { useChatStore } from "@/stores/chat";
import { ChatResponse } from "@/client/backend/models/ChatResponse";
import ChatSearch from "./ChatSearch.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const chatStore = useChatStore();
const isLoading = ref(true);
const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

function openChat(chat: ChatResponse) {
  router.push({
    path: `/chat/${chat.uuid}/messages`,
  });

  console.log("Chat opened", chat);
}

onMounted(() => {
  chatStore.fetchChats(props.projectId);

  isLoading.value = false;
});
</script>
