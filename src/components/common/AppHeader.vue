<template>
  <div class="flex items-center justify-between px-4 py-3 md:hidden">
    <UnifyLogo />

    <div class="flex gap-6 items-center">
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
  </div>
</template>

<script setup lang="ts">
import UnifyLogo from "@/components/logos/UnifyLogoV2.vue";

const getNotifications = () => {
  console.log("Getting notifications");
};
</script>
