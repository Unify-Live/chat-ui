<template>
  <n-card class="chat-message" :bordered="false" hoverable size="small">
    <n-space align="start" justify="space-between" :wrap="false">
      <!-- Left side with avatar and content -->
      <n-space :wrap="false">
        <n-avatar round size="large" :src="dialog.imageUrl" />
        <n-space vertical :wrap="false">
          <span class="username">{{ dialog.name }}</span>
          <span class="message">{{ dialog.lastMessage }}</span>
        </n-space>
      </n-space>

      <!-- Right side -->
      <n-space vertical align="end" :wrap="false">
        <span class="time"
          >{{ dialog.updatedAt!.getHours() }}:{{
            dialog.updatedAt!.getMinutes()
          }}</span
        >
        <n-badge
          v-if="dialog.unreadCount! > 0"
          :value="dialog.unreadCount"
          type="success"
        />
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts" setup>
import type { Dialog } from "@/types";

defineProps<{
  dialog: Dialog;
}>();
</script>
