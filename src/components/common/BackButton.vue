<template>
  <button
    @click="path ? router.replace(path) : router.back()"
    class="md:hidden"
  >
    <n-icon :component="ChevronBack" size="18" />
  </button>
</template>

<script setup lang="ts">
import { ChevronBack } from "@vicons/ionicons5";
import { useRouter } from "vue-router";

const router = useRouter();

const { path } = defineProps<{
  path?: string;
}>();
</script>
