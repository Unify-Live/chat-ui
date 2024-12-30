import { defineStore } from "pinia";
import { ref } from "vue";
import { useChatStore } from "@/stores/chat";
import {
  MessageCreate,
  WidgetEventTypes,
  WidgetClientTypingPayload,
  MessageResponse,
} from "@/client/backend";

export const useWebSocketStore = defineStore("websocket", () => {
  const socket = ref<WebSocket | null>(null);
  const chatStore = useChatStore();
  const isConnected = ref(false);

  function connect(token: string) {
    // Using the existing backend WebSocket endpoint
    socket.value = new WebSocket("ws://localhost:5000/managers/ws", [token]);
    // Add token to headers
    socket.value.onopen = () => {
      console.log("WebSocket Connected");
      isConnected.value = true;
    };

    socket.value.onmessage = (event) => {
      const serializedData = JSON.parse(event.data);
      if (serializedData.type === WidgetEventTypes.NEW_MESSAGE_FROM_CLIENT) {
        const incomingMessage: MessageResponse = serializedData.content;
        chatStore.handleNewMessageFromWebsocket(incomingMessage);
      } else if (serializedData.type === WidgetEventTypes.CLIENT_TYPING) {
        const typingPayload: WidgetClientTypingPayload = serializedData.content;
        chatStore.handleClientTypingText(typingPayload);
      }

      // console.log("WebSocket Message:", event);
    };

    socket.value.onclose = () => {
      console.log("WebSocket Disconnected");
      isConnected.value = false;
    };

    socket.value.onerror = (error) => {
      console.error("WebSocket Error:", error);
      isConnected.value = false;
    };
  }

  function sendMessage(message: MessageCreate) {
    if (socket.value?.readyState === WebSocket.OPEN) {
      socket.value.send(JSON.stringify({ message: message }));
    }
  }

  function disconnect() {
    if (socket.value) {
      socket.value.close();
      socket.value = null;
    }
  }

  return {
    isConnected,
    connect,
    sendMessage,
    disconnect,
  };
});
