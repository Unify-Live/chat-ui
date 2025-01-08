<template>
  <n-space vertical>
    <n-skeleton v-if="isLoading" height="15px" width="100%" :repeat="6" />
    <n-skeleton v-if="isLoading" height="15px" width="100%" :repeat="6" />
    <n-skeleton v-if="isLoading" height="15px" width="100%" :repeat="6" />
    <n-skeleton v-if="isLoading" height="15px" width="100%" :repeat="6" />
    <n-skeleton v-if="isLoading" height="15px" width="100%" :repeat="6" />
    <n-skeleton v-if="isLoading" height="15px" width="100%" :repeat="6" />
  </n-space>
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
import { onMounted, ref } from "vue";
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();
const isLoading = ref(true);

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  chatStore.fetchChats(props.projectId);

  isLoading.value = false;
});
</script>
