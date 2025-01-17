<template>
  <div class="flex-1 space-y-4">
    <div class="mb-6 flex space-x-2 border-b px-4 py-2.5">
      <BackButton />
      <n-avatar
        size="large"
        src="https://i.pravatar.cc/300"
        class="rounded-full"
      />
      <div class="flex-1">
        <p class="line-clamp-1 font-medium">
          {{ chatStore.chatDetails?.title }}
        </p>
        <p class="text-gray-500">{{ chatStore.chatDetails?.description }}</p>
      </div>
    </div>

    <div class="px-4" v-if="chatStore.chatDetails">
      <p>
        Status:
        <span class="font-bold">
          {{ chatStore.chatDetails?.status }}
        </span>
      </p>
    </div>

    <h3 class="text-center font-bold" v-if="chatStore.chatDetails">
      Учасники чату
    </h3>

    <div
      v-for="participant in chatStore.chatDetails?.participants"
      :key="participant.uuid"
      class="flex items-center gap-2 px-4"
    >
      <n-avatar round size="large" src="https://i.pravatar.cc/300" />

      <p>
        {{ participant.client_name || participant.user_email }}
        -
        <span class="text-sm font-bold">
          ({{ participant.participant_type }})
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackButton from "../common/BackButton.vue";
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();
</script>
