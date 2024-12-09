<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { NTabs, NTabPane, NDropdown, NButton } from "naive-ui";

export interface NavigationItem {
  label: string;
  url?: string;
  type: "link" | "button" | "dropdown";
  onClick?: () => void;
  options?: Array<{
    label: string;
    key: string;
    onClick: () => void;
  }>;
}

const props = defineProps<{
  navigationItems: NavigationItem[];
}>();

const route = useRoute();
const router = useRouter();

const handleClick = (item: NavigationItem) => {
  if (item.type === "link" && item.url) {
    router.push(item.url);
  } else if (item.type === "button" && item.onClick) {
    item.onClick();
  }
};

const handleSelect = (key: string, item: NavigationItem) => {
  const option = item.options?.find((opt) => opt.key === key);
  if (option) {
    option.onClick();
  }
};
</script>

<template>
  <n-tabs class="navigation-tabs" :value="route.path" :bar-width="0">
    <n-tab-pane
      v-for="item in props.navigationItems"
      :key="item.label"
      :name="item.url || item.label"
    >
      <template #tab>
        <template v-if="item.type === 'link'">
          <router-link :to="item.url!" class="nav-link">
            {{ item.label }}
          </router-link>
        </template>
        <template v-else-if="item.type === 'button'">
          <n-button @click="handleClick(item)" class="nav-button">
            {{ item.label }}
          </n-button>
        </template>
        <template v-else-if="item.type === 'dropdown'">
          <n-dropdown
            :options="item.options"
            @select="(key) => handleSelect(key, item)"
            trigger="hover"
          >
            <n-button class="nav-button">
              {{ item.label }}
            </n-button>
          </n-dropdown>
        </template>
      </template>
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped>
.navigation-tabs {
  height: 56px; /* equivalent to h-14 */
  width: 100%;
  overflow-y: hidden;
}

.nav-link {
  display: inline-block;
  padding: 12px 40px; /* equivalent to p-3 px-10 */
  font-weight: bold;
  font-size: 16px; /* equivalent to text-base */
  text-decoration: none;
  color: inherit;
}

.nav-button {
  padding: 12px 40px; /* equivalent to p-3 px-10 */
  font-weight: bold;
  font-size: 16px; /* equivalent to text-base */
}

/* Active link styling */
.n-tabs .router-link-active {
  text-decoration: underline;
}

/* Optional: Add hover effects */
.nav-link:hover,
.nav-button:hover {
  opacity: 0.8;
}

/* Optional: Add responsive adjustments */
@media (max-width: 768px) {
  .nav-link,
  .nav-button {
    padding: 12px 20px; /* Smaller padding on mobile */
  }
}
</style>
