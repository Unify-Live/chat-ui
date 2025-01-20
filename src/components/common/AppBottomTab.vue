<template>
  <nav
    class="flex items-center justify-around gap-7 overflow-y-auto p-3 md:hidden"
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
  { route: "/project-details", icon: HomeLogo, label: "" },
  { route: `/chat`, icon: ChatsLogo, label: "" },
  { route: "/projects", icon: ProjectLogo, label: "" },
];

const isMenuOpen = ref(false);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const open = () => {
  isMenuOpen.value = true;
};
</script>
