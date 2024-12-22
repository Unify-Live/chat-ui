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
import ChatsList from "@/components/dialog/ChatsList.vue";
import ChatWindow from "@/components/chat/ChatWindow.vue";
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();

// Props
const props = defineProps({
  projectId: {
    type: String,
    required: false,
  },
});

console.log(props.projectId);

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
