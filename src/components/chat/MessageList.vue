<template>
  <n-virtual-list
    v-if="chatStore.messagesList.length > 0"
    :items="chatStore.messagesList"
    :item-size="10"
    item-resizable
    :key-field="'uuid'"
    ref="virtualListInst"
  >
    <template #default="{ item: message }">
      <div class="mb-4">
        <ChatMessage :message="message" />
      </div>
    </template>
  </n-virtual-list>
  <div v-else>No messages yet.</div>
</template>

<script setup lang="ts">
import { useChatStore } from "@/stores/chat";
import ChatMessage from "./ChatMessage.vue";
import { VirtualListInst } from "naive-ui";
import { ref, watchEffect } from "vue";

const virtualListInst = ref<VirtualListInst>();
const chatStore = useChatStore();

function handleScrollToPosition() {
  virtualListInst.value?.scrollTo({
    index: chatStore.messagesList.length - 1,
    debounce: true,
  });
}

watchEffect(() => {
  chatStore;
  handleScrollToPosition();
});
</script>

<style scoped></style>
