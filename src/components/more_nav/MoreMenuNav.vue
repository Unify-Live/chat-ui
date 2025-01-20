<template>
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bottom-[67px] z-[99] bg-light-gray"
  >
    <AppHeader showCloseButton @close="closeMenu" />

    <!-- user info -->

    <div class="mb-6 flex items-center gap-4 px-4 py-2.5">
      <n-avatar
        size="large"
        src="https://i.pravatar.cc/300"
        class="size-16 rounded-full"
      />
      <div class="flex-1">
        <p class="text-lg font-semibold">Alex Fedotiev</p>
        <p class="text-sm text-gray-500">alex@unify.live</p>
      </div>
    </div>

    <!-- nav links -->

    <div class="grid gap-2 px-4">
      <router-link
        :to="item.route"
        v-for="item in links"
        :key="item.label"
        @click="closeMenu"
      >
        <button class="flex w-full items-center gap-3 bg-white px-4 py-3">
          <component :is="item.icon" class="w-4 *:fill-primary" />
          <span>{{ item.label }}</span>
        </button>
      </router-link>
    </div>

    <div class="mx-4">
      <!-- Go PRO   -->

      <div
        class="mt-8 flex w-full items-center justify-between gap-3 bg-[#EEF2FF] px-4 py-3 text-primary"
      >
        <div>
          <p class="mb-2 text-sm font-medium">Поточний план</p>
          <p class="text-xs">Активний до 25.06.2025</p>
        </div>

        <div>
          <span
            class="mb-2 ml-auto block w-fit rounded-full bg-[#C7D2FE] px-2 py-1 text-xs"
            >Pro</span
          >
          <p class="text-xs font-medium">Змінити</p>
        </div>
      </div>

      <!-- Logout button -->

      <button
        class="mt-4 flex w-full items-center justify-center gap-3 bg-[#FEF2F2] px-4 py-3 text-danger"
      >
        <LogoutLogo />
        <span>Вийти</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/common/AppHeader.vue";
import ContactsLogo from "../logos/ContactsLogo.vue";
import PaymentLogo from "../logos/PaymentLogo.vue";
import AnalyticsLogo from "../logos/AnalyticsLogo.vue";
import IntegrationsLogo from "../logos/IntegrationsLogo.vue";
import SettingsLogo from "../logos/SettingsLogo.vue";
import ProfileLogo from "../logos/ProfileLogo.vue";
import LogoutLogo from "../logos/LogoutLogo.vue";

const { isMenuOpen, closeMenu } = defineProps<{
  isMenuOpen: boolean;
  closeMenu: () => void;
}>();

const links = [
  {
    label: "Профіль",
    route: "/profile",
    icon: ProfileLogo,
  },

  {
    label: "Інтеграції",
    route: "/integrations",
    icon: IntegrationsLogo,
  },
  {
    label: "Контакти",
    route: "/contacts",
    icon: ContactsLogo,
  },
  {
    label: "Налаштування",
    route: "/settings",
    icon: SettingsLogo,
  },
  {
    label: "Аналітика",
    route: "/analytics",
    icon: AnalyticsLogo,
  },

  {
    label: "Підписка",
    route: "/payment",
    icon: PaymentLogo,
  },
];
</script>
