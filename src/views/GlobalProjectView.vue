<template>
  <n-layout has-sider>
    <!-- Desktop Sidebar - hidden on mobile -->
    <n-layout-sider
      bordered
      :collapsed="false"
      :width="100"
      class="hidden md:block bg-gray-50 border-r"
    >
      <nav class="p-4">
        <n-float-button-group
          vertical
          position="fixed"
          :style="{ left: '24px', top: '15%', transform: 'translateY(-50%)' }"
        >

          <n-tooltip trigger="hover" placement="right">
            <template #trigger>
              <div 
                class="p-2 cursor-pointer"
                :class="activeView === ProjectDetailsView ? 'text-primary' : 'text-gray-600'"
                @click="setActiveView(ProjectDetailsView)"
              >
                <n-icon size="24">
                  <Document />
                </n-icon>
              </div>
            </template>
            Project Details
          </n-tooltip>
          <n-tooltip trigger="hover" placement="right">
            <template #trigger>
              <div 
                class="p-2 cursor-pointer"
                :class="activeView === ChatView ? 'text-primary' : 'text-gray-600'"
                @click="setActiveView(ChatView)"
              >
                <n-icon size="24">
                  <ChatbubbleEllipses />
                </n-icon>
              </div>
            </template>
            Chat
          </n-tooltip>
          <n-tooltip trigger="hover" placement="right">
            <template #trigger>
              <div 
                class="p-2 cursor-pointer"
                :class="activeView === IntegrationsView ? 'text-primary' : 'text-gray-600'"
                @click="setActiveView(IntegrationsView)"
              >
                <n-icon size="24">
                  <Settings />
                </n-icon>
              </div>
            </template>
            Integrations
          </n-tooltip>
          <n-tooltip trigger="hover" placement="right">
            <template #trigger>
              <div 
                class="p-2 cursor-pointer"
                :class="activeView === Profile ? 'text-primary' : 'text-gray-600'"
                @click="setActiveView(Profile)"
              >
                <n-icon size="24">
                  <People />
                </n-icon>
              </div>
            </template>
            Profile
          </n-tooltip>
        </n-float-button-group>
      </nav>
    </n-layout-sider>
    <n-layout>
      <!-- Main Content -->
      <n-layout-content class="p-6">
        <component :is="activeView" v-bind="componentProps" />
      </n-layout-content>
      <!-- Mobile Bottom Navigation -->
      <div class="fixed bottom-0 left-0 right-0 bg-gray-50 border-t md:hidden">
        <nav class="flex justify-around p-2">
          <button
            class="flex flex-col items-center p-2"
            :class="{ 'text-green-500': activeView === ChatView }"
            @click="setActiveView(ChatView)"
          >
            <n-icon>
              <ChatbubbleEllipses />
            </n-icon>
          </button>
        </nav>
      </div>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  ChatbubbleEllipses,
  Settings,
  Analytics,
  People,
  Cog,
  Document,
  Checkmark,
  Calendar,
} from "@vicons/ionicons5";
import type { Component, DefineComponent } from "vue";
import ChatView from "@/views/ChatView.vue";
import Profile from "@/views/Profile.vue";
import ProjectDetailsView from "@/views/ProjectDetailsView.vue";
import IntegrationsView from "@/views/IntegrationsView.vue";
import { useRoute } from "vue-router";

type AnyComponent = DefineComponent<any, any, any>;

const route = useRoute();
const projectId = computed(() => route.params.id as string);

// Initialize with ChatView and type assertion
const activeView = ref<AnyComponent>(ProjectDetailsView);

const componentProps = computed(() => ({
  projectId: projectId.value,
}));

const setActiveView = (component: AnyComponent) => {
  activeView.value = component;
};
</script>

<style scoped>
.n-layout {
  min-height: 100vh;
}

/* Add padding bottom on mobile to account for bottom navigation */
@media (max-width: 768px) {
  .n-layout-content {
    padding-bottom: 4rem;
  }
}
</style>
