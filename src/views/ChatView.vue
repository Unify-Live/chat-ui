<template>
    <div class="project-view">
      <div class="dialog-list">
        <div class="dialog-list-content">
          <DialogList />
        </div>
      </div>
  
      <div class="chat-window">
        <ChatWindow
          :dialogId="dialogStore.activeDialog.id"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import DialogList from "@/components/dialog/DialogList.vue";
  import ChatWindow from "@/components/chat/ChatWindow.vue";
  import { useDialogStore } from "@/stores/dialog";
  
  const dialogStore = useDialogStore();
  
  onMounted(() => {
  });
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
  