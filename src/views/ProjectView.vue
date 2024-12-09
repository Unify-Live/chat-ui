<template>
  <div class="project-view">
    <div
      v-if="!isMobile || !dialogStore.dialogOpened"
      class="dialog-list"
      :class="{ 'chat-open': isMobile && dialogStore.dialogOpened }"
    >
      <div class="dialog-list-search">
        <n-input
          v-model:value="dialogStore.searchQuery"
          placeholder="Пошук за діалогом"
          clearable
          size="large"
          style="margin-bottom: 10px"
        />
        <n-select
          v-model:value="dialogStore.selectedIntegrationFilter"
          filterable
          multiple
          placeholder="Фільтрувати за інтеграцією"
          :options="options"
        />
      </div>
      <div class="dialog-list-content">
        <DialogList />
      </div>
    </div>

    <div v-if="!isMobile || dialogStore.dialogOpened" class="chat-window">
      <ChatWindow
        v-if="dialogStore.dialogOpened"
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

const isMobile = ref(false);

const options = [
  {
    label: "Основний tg бот",
    value: "telegram",
  },
  {
    label: "Сайт",
    value: "site",
  },
];

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const backToDialogList = () => {
  dialogStore.activeDialog.value = Dialog({});
};

// Lifecycle hooks
onMounted(() => {
  checkIfMobile();
  window.addEventListener("resize", checkIfMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkIfMobile);
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

@media (max-width: 768px) {
  .project-view {
    flex-direction: column;
  }

  .dialog-list,
  .chat-window {
    width: 100%;
  }
}
</style>
