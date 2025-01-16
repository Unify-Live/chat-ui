import {
  ChatCoreService,
  ChatMessagesService,
  OpenAPI,
} from "@/client/backend";
import { getBackendUrl } from "@/appConfig";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { ChatResponse } from "@/client/backend/models/ChatResponse";
import { MessageResponse } from "@/client/backend/models/MessageResponse";
import { WidgetClientTypingPayload } from "@/client/backend";
import { useRoute } from "vue-router";

OpenAPI.BASE = getBackendUrl();
OpenAPI.TOKEN = localStorage.getItem("userToken") || "";

export const useChatStore = defineStore("chatStore", () => {
  const chatList = ref<ChatResponse[]>([]);
  const messagesList = ref<MessageResponse[]>([]);
  const route = useRoute();

  // const chatOpened = ref(false);
  // const selectedChat = ref<ChatResponse | null>(null);

  const selectedChat = computed<ChatResponse | null>(() => chatList.value.find((chat) => chat.uuid === route.params.id) || null);
  const chatOpened = computed(() => !!selectedChat.value);

  const clientTyping = ref(false);
  const clientTypingText = ref("");

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

  function handleNewMessageFromWebsocket(message: MessageResponse) {
    if (selectedChat.value && selectedChat.value.uuid === message.chat_uuid) {
      messagesList.value.push(message);
    }
  }

  function handleClientTypingText(typingEvent: WidgetClientTypingPayload) {
    if (
      selectedChat.value &&
      selectedChat.value.uuid === typingEvent.chat_uuid
    ) {
      clientTyping.value = typingEvent.is_typing;
      clientTypingText.value = typingEvent.text_typed || "";
    }
  }

  watch(selectedChat, (newChat) => {

    messagesList.value = [];

    if (newChat) {
      clientTypingText.value = "";
      fetchMessagesList(newChat.uuid);
    }
  })

  return {
    chatList,
    selectedChat,
    clientTyping,
    clientTypingText,
    handleClientTypingText,
    handleNewMessageFromWebsocket,
    fetchChats,
    messagesList,
    chatOpened,
    fetchMessagesList,
  };
});
