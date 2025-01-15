<template>
  <div>
    <!-- message search -->

    <div class="m-4 flex items-center gap-2 rounded-lg border p-2">
      <n-icon :component="Search" size="18" color="#E5E7EB" />

      <input
        v-model="search_text"
        type="text"
        placeholder="Type a message..."
        class="flex-1 outline-gray-300"
      />
    </div>

    <!-- message filters -->

    <div>
      <n-scrollbar x-scrollable>
        <div class="flex max-w-72 gap-4 p-4">
          <button
            v-for="filter in filters"
            :key="filter.name"
            @click="selected_filter = filter"
            class="w-fit whitespace-nowrap rounded-full bg-gray-100 px-3 py-1.5 text-sm"
            :class="{
              '!bg-primary text-white': selected_filter === filter,
            }"
          >
            {{ filter.name }} ({{ filter.l }})
          </button>
        </div>
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@vicons/ionicons5";

const search_text = ref("");

const filters = ref([
  {
    name: "Всі",
    l: 33,
  },
  {
    name: "Віджет",
    l: 6,
  },
  {
    name: "API",
    l: 8,
  },
  {
    name: "Starred",
    l: 7,
  },
] as { name: string; l: number }[]);

const selected_filter = ref(filters.value[0]);
</script>
