<template>
  <div class="hidden h-full md:flex">
    <div class="hidden flex-1 overflow-hidden border-r md:block">
      <ChatsList :projectId="projectId" />
    </div>
    <div class="flex flex-[2.8] flex-col border-r">
      <ChatWindow />
    </div>
    <div class="hidden flex-1 md:block">
      <ChatDetails />
    </div>
  </div>

  <div class="flex h-full md:hidden">
    <router-view />
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
import ChatDetails from "@/components/chat_details/ChatDetails.vue";

const userStore = useUserStore();
const message = useMessage();
const router = useRouter();
const chatStore = useChatStore();

const projectId = userStore.getSelectedProjectUuid();

onMounted(() => {});
</script>
