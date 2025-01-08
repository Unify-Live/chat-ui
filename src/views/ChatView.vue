<template>
  <n-space>
    <n-card class="h-screen">
      <ChatsList :projectId="projectId" />
    </n-card>
    <n-card class="h-screen">
      <ChatHeader />
      <ChatWindow />
    </n-card>
  </n-space>
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
