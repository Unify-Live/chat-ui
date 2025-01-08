<template>
  <n-badge value="telegram" color="grey">
    <n-avatar round size="large" src="https://i.pravatar.cc/300" />
    <template #value>
      <!--Define custom Icon for badge what we have on avatar-->
      <n-icon :component="AmericanFootballSharp" />
    </template>
  </n-badge>

  <span>{{ chat.title }}</span>
  <span> LAST MESSAGE </span>
</template>

<script lang="ts" setup>
import { ChatResponse } from "@/client/backend/models/ChatResponse";
import { AmericanFootballSharp } from "@vicons/ionicons5";

defineProps<{
  chat: ChatResponse;
}>();
</script>
