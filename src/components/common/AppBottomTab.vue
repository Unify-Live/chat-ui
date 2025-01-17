<template>
  <nav
    class="flex items-center gap-7 justify-around p-3 overflow-y-auto md:hidden"
  >
    <router-link
      :to="item.route"
      v-slot="{ isActive }"
      v-for="item in navItems"
      :key="item.label"
      @click="closeMenu"
    >
      <button
        class="flex flex-col items-center gap-0.5"
        :class="{ 'text-primary': isActive && !isMenuOpen }"
      >
        <component
          :is="item.icon"
          :class="{ '*:fill-primary': isActive && !isMenuOpen }"
          class="size-5"
        />
        {{ item.label }}
      </button>
    </router-link>

    <button
      class="flex flex-col items-center gap-0.5"
      :class="{ 'text-primary': isMenuOpen }"
      @click="isMenuOpen = !isMenuOpen"
    >
      <component
        :is="OpenMoreOptionsLogo"
        :class="{ '*:stroke-primary': isMenuOpen }"
        class="size-5"
      />
      Меню
    </button>

    <MoreMenuNav :isMenuOpen="isMenuOpen" :closeMenu="closeMenu" />
  </nav>
</template>

<script setup lang="ts">
import OpenMoreOptionsLogo from "@/components/logos/OpenMoreOptionsLogo.vue";
import ChatsLogo from "@/components/logos/ChatsLogo.vue";
import HomeLogo from "@/components/logos/HomeLogo.vue";
import ProjectLogo from "../logos/ProjectLogo.vue";
import { ref } from "vue";
import MoreMenuNav from "../more_nav/MoreMenuNav.vue";

const navItems = [
  { route: "/projects", icon: HomeLogo, label: "Головна" },

  { route: `/chat`, icon: ChatsLogo, label: "Чат" },

  { route: "/project-details", icon: ProjectLogo, label: "Проєкти" },
  // {
  //   route: "/more",
  //   icon: OpenMoreOptionsLogo,
  //   label: "Меню",
  // },
];

const isMenuOpen = ref(false);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const open = () => {
  isMenuOpen.value = true;
};
</script>
