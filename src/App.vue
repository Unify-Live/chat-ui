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
              <div class="app-container">
                <n-layout>
                  <n-layout-header
                    class="header"
                    :bordered="userStore.darkMode"
                  >
                    <div class="header-content">
                      <!-- {/* Left section */} -->
                      <div class="header-left"></div>

                      <!-- {/* Center section - title */} -->
                      <div class="header-center">
                        <span class="page-title" style="color: #ffffff">
                          Chat Mate
                        </span>
                      </div>

                      <!-- {/* Right section - user controls */} -->
                      <div class="header-right">
                        <n-switch
                          v-model:value="userStore.darkMode"
                          @update:value="userStore.setDarkMode"
                          size="large"
                        >
                          <template #checked-icon>
                            <n-icon :component="DarkModeTwotone" />
                          </template>
                          <template #unchecked-icon>
                            <n-icon :component="WbSunnyTwotone" />
                          </template>
                        </n-switch>

                        <n-dropdown
                          v-if="userStore.user.loggedIn"
                          :options="userDropdownOptions"
                          @select="onUserDropdownSelect"
                          placement="bottom-end"
                        >
                          <n-button
                            class="user-button"
                            id="username"
                            round
                            :theme-overrides="
                              userStore.darkMode
                                ? menuButtonThemeOverridesDark
                                : menuButtonThemeOverridesLight
                            "
                          >
                            <span style="margin: 4px">{{
                              userStore.user.username
                            }}</span>
                            <n-icon class="">
                              <Person />
                            </n-icon>
                          </n-button>
                        </n-dropdown>
                      </div>
                    </div>
                  </n-layout-header>

                  <n-layout-content class="content">
                    <NavigationBar
                      v-if="
                        userStore.user.loggedIn && navigationItems.length > 0
                      "
                      :navigation-items="navigationItems"
                    />
                    <div class="content-container">
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
import { menuButtonThemeOverridesDark } from "./globalTheme";
import { menuButtonThemeOverridesLight } from "./globalTheme";
import { h, Component } from "vue";
import { useUserStore } from "@/stores/user";
import { DarkModeTwotone, WbSunnyTwotone } from "@vicons/material";
import { LogOutOutline, Person } from "@vicons/ionicons5";
import { darkTheme, DropdownOption, NIcon } from "naive-ui";
import { useRouter } from "vue-router";
import { NavigationItem } from "@/components/common/NavigationBar.vue";

const userStore = useUserStore();
userStore.setUserFromToken(localStorage.getItem("userToken")!);

const navigationItems: NavigationItem[] = [
  {
    label: "Проекти",
    url: "/",
    type: "link",
  },
  {
    label: "Профіль",
    url: "/profile",
    type: "link",
  },
];

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
<style>
.max-w-85 {
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
}
</style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 56px; /* equivalent to h-14 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 16px; /* equivalent to px-4 */
  max-width: 1200px;
  margin: 0 auto;
}

.header-left {
  width: 100px;
}

.header-center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.header-right {
  width: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.page-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.user-button {
  padding: 8px;
}

.content {
  flex-grow: 1;
}

@media (max-width: 640px) {
  .page-title {
    font-size: 1rem;
  }

  .header-content {
    padding: 0 8px;
  }
}
</style>
