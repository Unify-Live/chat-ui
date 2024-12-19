<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      :collapsed="false"
      :width="200"
      class="p-4 bg-white"
    >
      <n-button-group vertical class="w-full">
        <n-button
          v-for="item in navigationItems"
          :key="item.key"
          :type="activeView === item.key ? 'primary' : 'default'"
          class="w-full mb-2 text-left"
          @click="setActiveView(item.key)"
        >
          <template #icon>
            <n-icon>
              <component :is="item.icon" />
            </n-icon>
          </template>
          {{ item.label }}
        </n-button>
      </n-button-group>
    </n-layout-sider>
    <n-layout>
      <n-layout-content class="p-6 bg-gray-50">
        <component :is="currentView" />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  ChatbubbleEllipses,
  Settings,
  Analytics,
  People,
  Cog,
  Document,
  Checkmark,
  Calendar
} from '@vicons/ionicons5'
import type { Component } from 'vue'
import ChatView from '@/views/ChatView.vue'
import IntegrationsView from '@/views/IntegrationsView.vue'

interface NavigationItem {
  key: string
  label: string
  icon: Component
  component: Component
}

const activeView = ref('chat')

const navigationItems: NavigationItem[] = [
  { 
    key: 'chat', 
    label: 'Chat', 
    icon: ChatbubbleEllipses,
    component: ChatView 
  },
  { 
    key: 'integrations', 
    label: 'Integrations', 
    icon: Settings,
    component: IntegrationsView 
  },
  { 
    key: 'analytics', 
    label: 'Analytics', 
    icon: Analytics,
    component: ChatView // Replace with actual component
  },
  { 
    key: 'customers', 
    label: 'Customers', 
    icon: People,
    component: ChatView // Replace with actual component
  },
  { 
    key: 'settings', 
    label: 'Settings', 
    icon: Cog,
    component: ChatView // Replace with actual component
  },
  { 
    key: 'reports', 
    label: 'Reports', 
    icon: Document,
    component: ChatView // Replace with actual component
  },
  { 
    key: 'tasks', 
    label: 'Tasks', 
    icon: Checkmark,
    component: ChatView // Replace with actual component
  },
  { 
    key: 'calendar', 
    label: 'Calendar', 
    icon: Calendar,
    component: ChatView // Replace with actual component
  }
]

const currentView = computed(() => {
  const item = navigationItems.find(item => item.key === activeView.value)
  return item?.component || ChatView
})

const setActiveView = (key: string) => {
  activeView.value = key
}
</script>

<style scoped>
.n-layout {
  height: 100vh;
}

.n-layout-sider {
  display: flex;
  flex-direction: column;
}

.n-button-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>