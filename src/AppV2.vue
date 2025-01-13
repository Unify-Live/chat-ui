<template>
  <n-config-provider
    :theme="userStore.darkMode ? darkTheme : null"
    :theme-overrides="
      userStore.darkMode ? themeOverridesDark : themeOverridesLight
    "
  >
    <n-message-provider placement="bottom" :closable="true" :duration="6000">
      <n-dialog-provider>
        <n-notification-provider>
          <n-loading-bar-provider>
            <div class="flex h-screen divide-y flex-col md:flex-row">
              <AppHeader />

              <AppSidebar />

              <main class="flex-1 overflow-y-auto">
                <router-view />
              </main>

              <AppBottomTab />
            </div>
          </n-loading-bar-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { themeOverridesLight, themeOverridesDark } from "./globalTheme";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useWebSocketStore } from "@/stores/websocket";
import { darkTheme } from "naive-ui";
import AppSidebar from "./components/common/AppSidebar.vue";
import AppBottomTab from "./components/common/AppBottomTab.vue";
import AppHeader from "./components/common/AppHeader.vue";

const userStore = useUserStore();
const webSocketStore = useWebSocketStore();

onMounted(() => {
  userStore.setUserFromToken(localStorage.getItem("userToken")!);
  if (userStore.user.token) {
    webSocketStore.connect(userStore.user.token);
  }
});
</script>

<style scoped>
.n-layout {
  min-height: 100vh;
}

@media (max-width: 768px) {
  .n-layout-content {
    padding-bottom: 4rem;
  }
}

@media (max-height: 600px) {
  .n-layout-sider {
    display: none;
  }

  .mobile-nav {
    display: block;
  }
}
</style>
