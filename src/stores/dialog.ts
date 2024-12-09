import { Dialog, Message } from "../types";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useDialogStore = defineStore("dialog", () => {
  const activeDialog = ref<Dialog>({});
  const searchQuery: Ref<string> = ref("");
  const selectedIntegrationFilter: Ref<string> = ref("");
  const dialogOpened: Ref<boolean> = ref(false);

  async function selectActive(dialog: Dialog) {
    activeDialog.value = dialog;
    dialogOpened.value = true;
  }

  function returnFilterDialogs() {
    return mockDialogs.filter(
      (dialog) =>
        dialog.name!.includes(searchQuery.value) &&
        dialog.source!.includes(selectedIntegrationFilter.value),
    );
  }

  async function dropActive() {
    dialogOpened.value = false;
    activeDialog.value = {};
  }

  return {
    activeDialog,
    dialogOpened,
    dropActive,
    selectActive,
    searchQuery,
    returnFilterDialogs,
    selectedIntegrationFilter,
  };
});

export const mockDialogs: Dialog[] = [
  {
    id: "1",
    imageUrl: "https://i.pravatar.cc/301",
    name: "Адам",
    lastMessage: "Hi!",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 5,
    source: "telegram",
  },
  {
    id: "2",
    imageUrl: "https://i.pravatar.cc/302",
    name: "Альбіна",
    lastMessage: "Hello, I have a question.",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 2,
    source: "telegram",
  },
  {
    id: "3",
    imageUrl: "https://i.pravatar.cc/303",
    name: "Алекс",
    lastMessage: "How can I help you?",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "site",
  },
  {
    id: "4",
    imageUrl: "https://i.pravatar.cc/304",
    name: "Anatoly",
    lastMessage: "I have a problem with my order.",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "site",
  },
  {
    id: "5",
    imageUrl: "https://i.pravatar.cc/305",
    name: "Andrey",
    lastMessage: "Hi!",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "telegram",
  },
  {
    id: "6",
    imageUrl: "https://i.pravatar.cc/306",
    name: "Vadim",
    lastMessage: "Hello, I have a question.",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "telegram",
  },
  {
    id: "7",
    imageUrl: "https://i.pravatar.cc/307",
    name: "Vladislav",
    lastMessage: "How can I help you?",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "telegram",
  },
  {
    id: "8",
    imageUrl: "https://i.pravatar.cc/308",
    name: "Yakiv",
    lastMessage: "I have a problem with my order.",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "telegram",
  },
  {
    id: "9",
    imageUrl: "https://i.pravatar.cc/309",
    name: "Yegor",
    lastMessage: "Hi!",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "telegram",
  },
  {
    id: "10",
    imageUrl: "https://i.pravatar.cc/310",
    name: "Yevgen",
    lastMessage: "Hello, I have a question.",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "telegram",
  },
  {
    id: "11",
    imageUrl: "https://i.pravatar.cc/311",
    name: "Pylyp",
    lastMessage: "How can I help you?",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "telegram",
  },
  {
    id: "12",
    imageUrl: "https://i.pravatar.cc/312",
    name: "Heorhiy",
    lastMessage: "I have a problem with my order.",
    updatedAt: new Date(),
    projectId: 1,
    unreadCount: 0,
    source: "telegram",
  },
];

export const messageMockList: Message[] = [
  {
    id: 1,
    dialogId: 1,
    side: "manager",
    content: "Hello!",
    senderId: "manager1",
    type: "text",
    status: "sent",
    createdAt: new Date(),
  },
  {
    id: 2,
    dialogId: 1,
    side: "client",
    content: "Hi!",
    senderId: "client1",
    type: "text",
    status: "delivered",
    createdAt: new Date(),
  },
  {
    id: 3,
    dialogId: 1,
    side: "manager",
    content: "How can I help you?",
    senderId: "manager1",
    type: "text",
    status: "read",
    createdAt: new Date(),
  },
  {
    id: 4,
    dialogId: 1,
    side: "client",
    content: "I have a problem with my order.",
    senderId: "client1",
    type: "text",
    status: "sent",
    createdAt: new Date(),
  },
  {
    id: 5,
    dialogId: 1,
    side: "manager",
    content: "Please provide your order number.",
    senderId: "manager1",
    type: "text",
    status: "delivered",
    createdAt: new Date(),
  },
  {
    id: 6,
    dialogId: 1,
    side: "client",
    content: "123456",
    senderId: "client1",
    type: "text",
    status: "read",
    createdAt: new Date(),
  },
  {
    id: 7,
    dialogId: 1,
    side: "manager",
    content: "Thank you. Let me check.",
    senderId: "manager1",
    type: "text",
    status: "sent",
    createdAt: new Date(),
  },
  {
    id: 8,
    dialogId: 1,
    side: "manager",
    content: "I found your order. It will be delivered tomorrow.",
    senderId: "manager1",
    type: "text",
    status: "delivered",
    createdAt: new Date(),
  },
  {
    id: 9,
    dialogId: 1,
    side: "client",
    content: "Thank you!",
    senderId: "client1",
    type: "text",
    status: "read",
    createdAt: new Date(),
  },
  {
    id: 10,
    dialogId: 1,
    side: "client",
    content: "Thank you!",
    senderId: "client1",
    type: "text",
    status: "read",
    createdAt: new Date(),
  },
  {
    id: 11,
    dialogId: 1,
    side: "client",
    content: "Thank you!",
    senderId: "client1",
    type: "text",
    status: "read",
    createdAt: new Date(),
  },
  {
    id: 12,
    dialogId: 1,
    side: "client",
    content: "Thank you!",
    senderId: "client1",
    type: "text",
    status: "read",
    createdAt: new Date(),
  },
];
