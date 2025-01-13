<!-- UnifyLogo.vue -->
<template>
  <img src="../../assets/images/logo-mini.png" alt="Unify Logo" v-if="mini" />

  <img src="../../assets/images/logo.png" alt="Unify Logo" v-else />
</template>

<script setup lang="ts">
const { mini } = defineProps<{
  mini?: boolean;
}>();
</script>
