<template>
  <div class="chat-header border-b">
    <button @click="router.go(-1)" class="md:hidden">
      <n-icon :component="ChevronBack" size="18" />
    </button>

    <div class="header-left">
      <div class="client-info">
        <h2 class="client-name">name</h2>
      </div>
    </div>
    <div class="header-right">
      <n-button
        quaternary
        circle
        @click="openSettings"
        aria-label="Chat settings"
      >
        <template #icon>
          <n-icon>
            <SettingsOutline />
          </n-icon>
        </template>
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SettingsOutline, ChevronBack } from "@vicons/ionicons5";
import { useMessage } from "naive-ui";
import { useRouter } from "vue-router";

const message = useMessage();
const router = useRouter();

const openSettings = () => {
  message.info("Settings clicked. Not yet implemented.");
};
</script>

<style scoped>
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: inherit;
}

.client-info {
  display: flex;
  flex-direction: column;
}

.client-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.client-source {
  font-size: 0.85rem;
  opacity: 0.7;
}

.header-right {
  display: flex;
  align-items: center;
}
</style>
