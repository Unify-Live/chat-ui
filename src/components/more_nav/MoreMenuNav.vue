<template>
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bottom-[67px] bg-light-gray z-[99]"
  >
    <AppHeader showCloseButton @close="closeMenu" />

    <!-- user info -->

    <div class="flex gap-4 items-center px-4 py-2.5 mb-6">
      <n-avatar
        size="large"
        src="https://i.pravatar.cc/300"
        class="rounded-full size-16"
      />
      <div class="flex-1">
        <p class="font-semibold text-lg">Alex Fedotiev</p>
        <p class="text-gray-500 text-sm">alex@unify.live</p>
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
        <button class="flex items-center gap-3 bg-white px-4 py-3 w-full">
          <component :is="item.icon" class="w-4 *:fill-primary" />
          <span>{{ item.label }}</span>
        </button>
      </router-link>
    </div>

    <div class="mx-4">
      <!-- Go PRO   -->

      <div
        class="flex mt-8 items-center gap-3 bg-[#EEF2FF] justify-between text-primary px-4 py-3 w-full"
      >
        <div>
          <p class="font-medium text-sm mb-2">Поточний план</p>
          <p class="text-xs">Активний до 25.06.2025</p>
        </div>

        <div>
          <span
            class="bg-[#C7D2FE] text-xs px-2 py-1 rounded-full w-fit mb-2 block ml-auto"
            >Pro</span
          >
          <p class="text-xs font-medium">Змінити</p>
        </div>
      </div>

      <!-- Logout button -->

      <button
        class="flex mt-4 items-center gap-3 bg-[#FEF2F2] justify-center text-danger px-4 py-3 w-full"
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
