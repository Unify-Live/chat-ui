import { defineStore } from "pinia";
import { ref } from "vue";
import { useChatStore } from "@/stores/chat";
import {
  MessageCreate,
  WidgetEventTypes,
  WidgetClientTypingPayload,
  ManagerWsEventTypes,
  MessageResponse,
} from "@/client/backend";

export const useWebSocketStore = defineStore("websocket", () => {
  const socket = ref<WebSocket | null>(null);
  const chatStore = useChatStore();
  const isConnected = ref(false);
  const reconnectAttempts = ref(0);
  const maxReconnectAttempts = 5;
  const baseReconnectDelay = 1000; // Start with 1 second
  let reconnectTimeout: number | null = null;

  function getReconnectDelay(): number {
    // Exponential backoff with max of 30 seconds
    return Math.min(
      baseReconnectDelay * Math.pow(2, reconnectAttempts.value),
      30000,
    );
  }

  function clearReconnectTimeout() {
    if (reconnectTimeout !== null) {
      window.clearTimeout(reconnectTimeout);
      reconnectTimeout = null;
    }
  }

  function attemptReconnect(token: string) {
    if (reconnectAttempts.value >= maxReconnectAttempts) {
      console.error("Max reconnection attempts reached");
      return;
    }

    clearReconnectTimeout();
    reconnectTimeout = window.setTimeout(() => {
      reconnectAttempts.value++;
      connect(token);
    }, getReconnectDelay());
  }

  function connect(token: string) {
    // Clear any existing connection
    disconnect();

    socket.value = new WebSocket("ws://localhost:5000/managers/ws", [token]);

    socket.value.onopen = () => {
      console.log("WebSocket Connected");
      isConnected.value = true;
      reconnectAttempts.value = 0;
      clearReconnectTimeout();
    };

    socket.value.onmessage = (event) => {
      const serializedData = JSON.parse(event.data);
      if (
        serializedData.type === WidgetEventTypes.NEW_MESSAGE_FROM_CLIENT ||
        serializedData.type === ManagerWsEventTypes.NEW_MESSAGE_FROM_MANGER
      ) {
        const incomingMessage: MessageResponse = serializedData.content;
        chatStore.handleNewMessageFromWebsocket(incomingMessage);
      } else if (serializedData.type === WidgetEventTypes.CLIENT_TYPING) {
        const typingPayload: WidgetClientTypingPayload = serializedData.content;
        chatStore.handleClientTypingText(typingPayload);
      }
    };

    socket.value.onclose = () => {
      console.log("WebSocket Disconnected");
      isConnected.value = false;
      attemptReconnect(token);
    };

    socket.value.onerror = (error) => {
      console.error("WebSocket Error:", error);
      isConnected.value = false;
    };
  }

  function sendMessage(message: MessageCreate) {
    if (socket.value?.readyState === WebSocket.OPEN) {
      const eventToSend = {
        type: ManagerWsEventTypes.NEW_MESSAGE_FROM_MANGER,
        content: message,
      };
      socket.value.send(JSON.stringify(eventToSend));
    }
  }

  function disconnect() {
    clearReconnectTimeout();
    if (socket.value) {
      socket.value.close();
      socket.value = null;
    }
    isConnected.value = false;
    reconnectAttempts.value = 0;
  }

  return {
    isConnected,
    connect,
    sendMessage,
    disconnect,
  };
});
