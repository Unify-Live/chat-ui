<template>
  <div class="flex items-center justify-between px-4 py-3 md:hidden bg-white">
    <UnifyLogo />

    <div class="flex gap-6 items-center" v-if="!showCloseButton">
      <button @click="getNotifications">
        <n-badge :value="2" :offset="[-2, -2]">
          <n-icon size="20">
            <NotificationsLogo />
          </n-icon>
        </n-badge>
      </button>

      <ThemeChanger />

      <router-link to="/profile" custom v-slot="{ href, navigate, isActive }">
        <button
          :href="href"
          @click="navigate"
          :class="isActive ? 'text-primary' : 'text-gray-600'"
        >
          <img
            class="bg-black h-8 rounded-full aspect-square"
            src="https://i.pravatar.cc/300"
            preview-disabled
          />
        </button>
      </router-link>
    </div>

    <button @click="emit('close')" v-else>
      <n-icon size="20">
        <CloseOutline />
      </n-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { CloseOutline } from "@vicons/ionicons5";

import UnifyLogo from "@/components/logos/UnifyLogoV2.vue";

const { showCloseButton } = defineProps<{
  showCloseButton?: boolean;
}>();

const emit = defineEmits(["close"]);

const getNotifications = () => {
  console.log("Getting notifications");
};
</script>
