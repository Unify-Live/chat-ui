<template>
  <div class="flex h-full">
    <div class="flex-[0.2] border-r">
      <ChatsList :projectId="projectId" />
    </div>
    <div class="flex-[0.6] border-r flex flex-col">
      <ChatHeader />
      <ChatWindow />
    </div>
    <div class="flex-[0.2]">
      <h1>Chat Details</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ChatsList from "@/components/chat_list/ChatsList.vue";
import ChatWindow from "@/components/chat/ChatWindow.vue";
import ChatHeader from "@/components/chat/ChatHeader.vue";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import { useMessage } from "naive-ui";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const message = useMessage();
const router = useRouter();
const chatStore = useChatStore();

const projectId = userStore.getSelectedProjectUuid();

onMounted(() => {});
</script>
