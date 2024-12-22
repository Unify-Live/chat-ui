<template>
  <n-virtual-list
    class="dialog-virtual-list"
    :items="chatStore.chatList"
    :item-size="64"
    item-resizable
    :key-field="'id'"
    style="max-height: 70vh"
  >
    <template #default="{ item: chat }">
      <div class="dialog-item" :key="chat.id">
        <ChatItem :chat="chat" />
      </div>
    </template>
  </n-virtual-list>
</template>

<script lang="ts" setup>
import ChatItem from "./ChatItem.vue";
import { onMounted } from "vue";
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  chatStore.fetchChats(props.projectId);
});
</script>

<style scoped>
.dialog-virtual-list {
  width: 100%;
}

.dialog-item {
  box-sizing: border-box;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dialog-item:hover {
  background-color: rgba(0, 0, 0, 0.06);
}
</style>
