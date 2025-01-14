<template>
  <div class="hidden h-screen flex-col border-r md:flex">
    <div class="px-3.5 py-1.5">
      <UnifyLogo mini />
    </div>

    <nav
      class="flex flex-1 flex-col items-center gap-8 overflow-y-auto border-t px-4 py-6"
    >
      <router-link
        :to="item.route"
        v-slot="{ isActive }"
        v-for="item in navItems"
        :key="item.label"
        class="*:focus-within:!outline-none"
      >
        <n-tooltip trigger="hover" placement="right">
          <template #trigger>
            <component
              :is="item.icon"
              :class="{ '*:fill-primary': isActive }"
              class="w-8"
            />
          </template>
          {{ item.label }}
        </n-tooltip>
      </router-link>
    </nav>

    <div class="flex flex-col items-center gap-6 border-t p-4">
      <n-tooltip trigger="hover" placement="right">
        <template #trigger>
          <button @click="getNotifications">
            <n-badge :value="2" :offset="[6, -6]">
              <n-icon size="20">
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
                class="!h-10 !w-8 rounded-2xl bg-black"
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
