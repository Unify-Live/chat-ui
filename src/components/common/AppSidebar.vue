<template>
  <div class="hidden md:flex flex-col border-r h-screen">
    <div class="px-3.5 py-1.5">
      <UnifyLogo mini />
    </div>

    <nav
      class="flex flex-col items-center gap-9 py-6 px-4 flex-1 border-t overflow-y-auto"
    >
      <router-link
        :to="item.route"
        v-slot="{ isActive }"
        v-for="item in navItems"
        :key="item.label"
      >
        <n-tooltip trigger="hover" placement="right">
          <template #trigger>
            <component
              :is="item.icon"
              :class="{ '*:fill-primary': isActive }"
            />
          </template>
          {{ item.label }}
        </n-tooltip>
      </router-link>
    </nav>

    <div class="flex flex-col gap-6 items-center p-4 border-t">
      <n-tooltip trigger="hover" placement="right">
        <template #trigger>
          <button @click="getNotifications">
            <n-badge :value="2" :offset="[6, -6]">
              <n-icon size="24">
                <NotificationsLogo />
              </n-icon>
            </n-badge>
          </button>
        </template>
        Сповіщення
      </n-tooltip>

      <n-tooltip trigger="hover" placement="right">
        <template #trigger>
          <ThemeChanger />
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
            <button
              :href="href"
              @click="navigate"
              :class="isActive ? 'text-primary' : 'text-gray-600'"
            >
              <n-image
                class="rounded-2xl bg-black !h-10 !w-8"
                src="https://i.pravatar.cc/300"
                preview-disabled
              />
            </button>
          </router-link>
        </template>
        Мій профіль
      </n-tooltip>
    </div>
  </div>
</template>

<script setup>
import NotificationsLogo from "@/components/logos/NotificationsLogo.vue";
import AnalyticsLogo from "@/components/logos/AnalyticsLogo.vue";
import ChatsLogo from "@/components/logos/ChatsLogo.vue";
import ContactsLogo from "@/components/logos/ContactsLogo.vue";
import IntegrationsLogo from "@/components/logos/IntegrationsLogo.vue";
import HomeLogo from "@/components/logos/HomeLogo.vue";
import OpenMoreOptionsLogo from "@/components/logos/OpenMoreOptionsLogo.vue";
import PaymentLogo from "@/components/logos/PaymentLogo.vue";
import ProjectLogo from "@/components/logos/ProjectLogo.vue";
import UnifyLogo from "@/components/logos/UnifyLogoV2.vue";
import ThemeChanger from "./ThemeChanger.vue";

const navItems = [
  { route: "/projects", icon: HomeLogo, label: "Проекти" },
  { route: `/chat`, icon: ChatsLogo, label: "Чати" },
  { route: `/project-details`, icon: ProjectLogo, label: "Деталі проекту" },
  { route: "/integrations", icon: IntegrationsLogo, label: "Інтеграції" },
  { route: "/contacts", icon: ContactsLogo, label: "Контакти" },
  { route: "/analytics", icon: AnalyticsLogo, label: "Аналітика" },
  { route: "/payment", icon: PaymentLogo, label: "Оплата" },
];

const getNotifications = () => {
  console.log("Notifications clicked. Not yet implemented.");
};
</script>
