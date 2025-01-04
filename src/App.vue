<template>
  <n-config-provider
    :theme="userStore.darkMode ? darkTheme : null"
    :theme-overrides="
      userStore.darkMode ? themeOverridesDark : themeOverridesLight
    "
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider
            placement="bottom"
            :closable="true"
            :duration="6000"
          >
            <n-space vertical>
              <div class="">
                <n-layout>
                  <n-layout-content class="content">
                    <div class="">
                      <router-view></router-view>
                    </div>
                  </n-layout-content>
                </n-layout>
                <n-layout-footer></n-layout-footer>
              </div>
            </n-space>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { themeOverridesLight, themeOverridesDark } from "./globalTheme";
import { h, Component, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useWebSocketStore } from "@/stores/websocket";
import { LogOutOutline } from "@vicons/ionicons5";
import { darkTheme, DropdownOption, NIcon } from "naive-ui";
import { useRouter } from "vue-router";

const userStore = useUserStore();
userStore.setUserFromToken(localStorage.getItem("userToken")!);
const webSocketStore = useWebSocketStore();

onMounted(() => {
  if (userStore.user.token) {
    webSocketStore.connect(userStore.user.token);
  }
});

const router = useRouter();

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const userDropdownOptions: DropdownOption[] = [
  {
    label: "Logout",
    key: "logout",
    icon: renderIcon(LogOutOutline),
  },
];

async function onUserDropdownSelect(key: string) {
  if (key === "logout") {
    await userStore.logout();
    await router.push({ name: "projects" });
  }
}
</script>

<style scoped></style>
