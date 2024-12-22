import {
  ChatCoreService,
  ChatMessagesService,
  OpenAPI,
} from "@/client/backend";
import { getBackendUrl } from "@/appConfig";
import { defineStore } from "pinia";
import { ref } from "vue";
import { ChatResponse } from "@/client/backend/models/ChatResponse";
import { MessageResponse } from "@/client/backend/models/MessageResponse";

OpenAPI.BASE = getBackendUrl();
OpenAPI.TOKEN = localStorage.getItem("userToken") || "";

export const useChatStore = defineStore("chatStore", () => {
  const chatList = ref<ChatResponse[]>([]);
  const messagesList = ref<MessageResponse[]>([]);
  const chatOpened = ref(false);
  const selectedChat = ref<ChatResponse | null>(null);

  OpenAPI.BASE = getBackendUrl();
  OpenAPI.TOKEN = localStorage.getItem("userToken") || "";

  function fetchChats(projectUuid: string) {
    try {
      ChatCoreService.getProjectChats(projectUuid).then((chat) => {
        chatList.value = chat.items;
      });
    } catch (error) {
      console.error("Getting chat list:", error);
    }
  }

  function fetchMessagesList(chatUuid: string) {
    try {
      ChatMessagesService.getMessagesInChat(chatUuid).then((messages) => {
        messagesList.value = messages;
      });
    } catch (error) {
      console.error("Getting messages list:", error);
    }
  }

  return {
    chatList,
    selectedChat,
    fetchChats,
    messagesList,
    chatOpened,
    fetchMessagesList,
  };
});
