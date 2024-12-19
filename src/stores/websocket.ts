import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWebSocketStore = defineStore('websocket', () => {
  const socket = ref<WebSocket | null>(null);
  const messages = ref<string[]>([]);
  const isConnected = ref(false);
  

  function connect(token: string) {
    // Using the existing backend WebSocket endpoint    
    socket.value = new WebSocket('ws://localhost:5000/users/ws', [token]);
    // Add token to headers
    socket.value.onopen = () => {
      console.log('WebSocket Connected');
      isConnected.value = true;
    };

    socket.value.onmessage = (event) => {
      messages.value.push(event.data);
    };

    socket.value.onclose = () => {
      console.log('WebSocket Disconnected');
      isConnected.value = false;
    };

    socket.value.onerror = (error) => {
      console.error('WebSocket Error:', error);
      isConnected.value = false;
    };
  }

  function sendMessage(message: string) {
    if (socket.value?.readyState === WebSocket.OPEN) {
      socket.value.send(message);
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
    messages,
    connect,
    sendMessage,
    disconnect
  };
});