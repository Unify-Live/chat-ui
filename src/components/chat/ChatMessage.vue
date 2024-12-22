<template>
  <n-card bordered hoverable size="small">
    <span>{{ message.content }}</span>
    <p class="message-time">
      {{ message.created_at }}
    </p>
  </n-card>
</template>

<script setup lang="ts">
import { MessageResponse } from "@/client/backend/models/MessageResponse";
import { useThemeVars } from "naive-ui";

defineProps<{
  message: MessageResponse;
}>();

const themeVars = useThemeVars();
</script>

<style scoped>
.message-card {
  margin: 8px 0;
  border-radius: 12px;
}

.message-time {
  font-size: 0.8em;
  margin-top: 4px;
  opacity: 0.7;
}

.light-theme.manager {
  background-color: v-bind("themeVars.cardColor");
  color: v-bind("themeVars.textColor2");
  align-self: flex-end;
  text-align: right;
}

.light-theme.client {
  background-color: v-bind("themeVars.primaryColor");
  color: v-bind("themeVars.textColorInverted");
  align-self: flex-start;
  text-align: left;
}

.dark-theme.manager {
  background-color: v-bind("themeVars.cardColor");
  color: v-bind("themeVars.textColor2");
  align-self: flex-end;
  text-align: right;
}

.dark-theme.client {
  background-color: v-bind("themeVars.primaryColorSuppl");
  color: v-bind("themeVars.textColorInverted");
  align-self: flex-start;
  text-align: left;
}
</style>
