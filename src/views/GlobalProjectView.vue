<template>
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
                <button
                  class="w-full h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                  :class="
                    activeView === item.component
                      ? 'text-primary'
                      : 'text-gray-600'
                  "
                  @click="setActiveView(item.component)"
                >
                  <n-icon size="24">
                    <component :is="item.icon" />
                  </n-icon>
                </button>
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
                @click="getNotifications()"
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
              <div
                class="h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                :class="
                  activeView === ProjectDetailsView
                    ? 'text-primary'
                    : 'text-gray-600'
                "
                @click="setActiveView(Profile)"
              >
                <n-image
                  width="25"
                  src="https://i.pravatar.cc/300"
                  preview-disabled
                />
              </div>
            </template>
            Мій профіль
          </n-tooltip>
        </div>
      </nav>
    </n-layout-sider>

    <!-- Main content with scrollbar -->
    <n-layout :style="{ marginLeft: '80px' }" class="min-h-screen">
      <n-scrollbar class="h-screen">
        <n-layout-content class="p-6">
          <component :is="activeView" v-bind="componentProps" />
        </n-layout-content>
      </n-scrollbar>

      <!-- Mobile nav -->
      <div
        class="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden tall:block"
      >
        <nav class="flex justify-around p-2">
          <button
            v-for="(item, index) in mobileNavItems"
            :key="index"
            class="flex flex-col items-center p-2"
            :class="{ 'text-primary': activeView === item.component }"
            @click="setActiveView(item.component)"
          >
            <n-icon size="24">
              <component :is="item.icon" />
            </n-icon>
          </button>
        </nav>
      </div>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import NotificationsLogo from "@/components/logos/NotificationsLogo.vue";
import type { DefineComponent } from "vue";
import ChatView from "@/views/ChatView.vue";
import AnalyticsLogo from "@/components/logos/AnalyticsLogo.vue";
import ChatsLogo from "@/components/logos/ChatsLogo.vue";
import ContactsLogo from "@/components/logos/ContactsLogo.vue";
import IntegrationsLogo from "@/components/logos/IntegrationsLogo.vue";
import HomeLogo from "@/components/logos/HomeLogo.vue";
import OpenMoreOptionsLogo from "@/components/logos/OpenMoreOptionsLogo.vue";
import PaymentLogo from "@/components/logos/PaymentLogo.vue";
import Profile from "@/views/Profile.vue";
import ProjectDetailsView from "@/views/ProjectDetailsView.vue";
import IntegrationsView from "@/views/IntegrationsView.vue";
import { useRoute } from "vue-router";
import UnifyLogo from "../components/logos/UnifyLogo.vue";
import { UseMessage } from "naive-ui";

type AnyComponent = DefineComponent<any, any, any>;

const message = useMessage();
const route = useRoute();
const projectId = computed(() => route.params.id as string);
const activeView = ref<AnyComponent>(ProjectDetailsView);

const navItems = [
  { component: ProjectDetailsView, icon: HomeLogo, label: "Деталі проекту" },
  { component: ChatView, icon: ChatsLogo, label: "Чати" },
  { component: IntegrationsView, icon: IntegrationsLogo, label: "Інтеграції" },
  { component: ProjectDetailsView, icon: AnalyticsLogo, label: "Аналітика" },
  { component: ProjectDetailsView, icon: ContactsLogo, label: "Контакти" },
  { component: ProjectDetailsView, icon: PaymentLogo, label: "Оплата" },
];

const mobileNavItems = [
  { component: ProjectDetailsView, icon: HomeLogo },
  { component: ChatView, icon: ChatsLogo },
  { component: IntegrationsView, icon: PaymentLogo },
  { component: ProjectDetailsView, icon: OpenMoreOptionsLogo },
];

const componentProps = computed(() => ({
  projectId: projectId.value,
}));

const setActiveView = (component: AnyComponent) => {
  activeView.value = component;
};

const getNotifications = () => {
  message.info("Notifications clicked. Not yet implemented.");
};
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
