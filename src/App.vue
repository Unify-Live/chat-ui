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
            <n-space vertical>
              <n-layout has-sider class="h-screen">
                <!-- Fixed sidebar -->
                <n-layout-sider
                  bordered
                  :collapsed="false"
                  :width="80"
                  class="fixed left-0 top-0 h-full hidden md:block tall:hidden bg-white border-r"
                >
                  <nav class="h-full flex flex-col">
                    <!-- Logo section -->
                    <div class="p-3.5 border-b">
                      <UnifyLogo class="w-13 h-14" />
                    </div>

                    <!-- Navigation buttons -->
                    <div class="flex-1 px-4 pt-6 flex flex-col">
                      <!-- Top buttons section -->
                      <div class="flex flex-col gap-8">
                        <n-tooltip
                          trigger="hover"
                          placement="right"
                          v-for="(item, index) in navItems"
                          :key="index"
                        >
                          <template #trigger>
                            <router-link
                              :to="item.route"
                              custom
                              v-slot="{ href, navigate, isActive }"
                            >
                              <button
                                :href="href"
                                @click="navigate"
                                class="w-full h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                                :class="
                                  isActive ? 'text-primary' : 'text-gray-600'
                                "
                              >
                                <n-icon size="24">
                                  <component :is="item.icon" />
                                </n-icon>
                              </button>
                            </router-link>
                          </template>
                          {{ item.label }}
                        </n-tooltip>
                      </div>
                      <!-- Spacer to push bottom section down -->
                      <div class="flex-1"></div>
                    </div>

                    <!-- Bottom section -->
                    <div class="border-t p-4 flex flex-col gap-6">
                      <n-tooltip trigger="hover" placement="right">
                        <template #trigger>
                          <div
                            class="h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                            @click="getNotifications"
                          >
                            <n-badge :value="2" :offset="[6, -8]">
                              <n-icon size="24">
                                <NotificationsLogo />
                              </n-icon>
                            </n-badge>
                          </div>
                        </template>
                        Сповіщення
                      </n-tooltip>

                      <n-tooltip trigger="hover" placement="right">
                        <template #trigger>
                          <router-link
                            to="/profile"
                            custom
                            v-slot="{ href, navigate, isActive }"
                          >
                            <div
                              :href="href"
                              @click="navigate"
                              class="h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                              :class="
                                isActive ? 'text-primary' : 'text-gray-600'
                              "
                            >
                              <n-image
                                width="25"
                                src="https://i.pravatar.cc/300"
                                preview-disabled
                              />
                            </div>
                          </router-link>
                        </template>
                        Мій профіль
                      </n-tooltip>
                    </div>
                  </nav>
                </n-layout-sider>

                <!-- Main content with scrollbar -->
                <n-layout :style="{ marginLeft: '80px' }" class="min-h-screen">
                  <n-layout-content class="p-6">
                    <router-view></router-view>
                  </n-layout-content>

                  <!-- Mobile nav -->
                  <div
                    class="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden tall:block"
                  >
                    <nav class="flex justify-around p-2">
                      <router-link
                        v-for="(item, index) in mobileNavItems"
                        :key="index"
                        :to="item.route"
                        custom
                        v-slot="{ href, navigate, isActive }"
                      >
                        <button
                          :href="href"
                          @click="navigate"
                          class="flex flex-col items-center p-2"
                          :class="{ 'text-primary': isActive }"
                        >
                          <n-icon size="24">
                            <component :is="item.icon" />
                          </n-icon>
                        </button>
                      </router-link>
                    </nav>
                  </div>
                </n-layout>
              </n-layout>
            </n-space>
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
import NotificationsLogo from "@/components/logos/NotificationsLogo.vue";
import AnalyticsLogo from "@/components/logos/AnalyticsLogo.vue";
import ChatsLogo from "@/components/logos/ChatsLogo.vue";
import ContactsLogo from "@/components/logos/ContactsLogo.vue";
import IntegrationsLogo from "@/components/logos/IntegrationsLogo.vue";
import HomeLogo from "@/components/logos/HomeLogo.vue";
import OpenMoreOptionsLogo from "@/components/logos/OpenMoreOptionsLogo.vue";
import PaymentLogo from "@/components/logos/PaymentLogo.vue";
import UnifyLogo from "@/components/logos/UnifyLogo.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userStore = useUserStore();
const webSocketStore = useWebSocketStore();

const navItems = [
  { route: "/projects", icon: HomeLogo, label: "Проекти" },
  { route: `/project-details`, icon: HomeLogo, label: "Деталі проекту" },
  { route: `/chat`, icon: ChatsLogo, label: "Чати" },
  { route: "/integrations", icon: IntegrationsLogo, label: "Інтеграції" },
  { route: "/analytics", icon: AnalyticsLogo, label: "Аналітика" },
  { route: "/contacts", icon: ContactsLogo, label: "Контакти" },
  { route: "/payment", icon: PaymentLogo, label: "Оплата" },
];

const mobileNavItems = [
  { route: "/", icon: HomeLogo },
  { route: `/chat/${route.params.id}`, icon: ChatsLogo },
  { route: "/payment", icon: PaymentLogo },
  { route: "/more", icon: OpenMoreOptionsLogo },
];

const getNotifications = () => {
  console.log("Notifications clicked. Not yet implemented.");
};

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
