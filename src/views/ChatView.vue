<template>
  <div class="project-view">
    <div class="dialog-list">
      <div class="dialog-list-content">
        <ChatsList :projectId="projectId" />
      </div>
    </div>

    <div class="chat-window">
      <ChatWindow />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ChatsList from "@/components/chat_list/ChatsList.vue";
import ChatWindow from "@/components/chat/ChatWindow.vue";
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

<style scoped>
.project-view {
  display: flex;
  flex-direction: row;
}

.dialog-list {
  width: 25%;
}

.chat-window {
  width: 75%;
}
</style>
