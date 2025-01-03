<template>
  <div>
    <h1>Project Details</h1>
    <n-card title="Project Details">

    <n-space direction="vertical">
        <n-text>
        <span class="font-semibold">UUID:</span> {{projectsStore.currentProject?.uuid}}
        </n-text>
        <n-text>
        <span class="font-semibold">Name:</span> {{projectsStore.currentProject?.name}}
        </n-text>
        <n-text>
        <span class="font-semibold">Description:</span> {{projectsStore.currentProject?.description}}
        </n-text>
        <n-text>
        <span class="font-semibold">Created At:</span> {{projectsStore.currentProject?.created_at}}
        </n-text>
    </n-space>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/stores/project';
import { defineProps } from 'vue';
import { onMounted } from "vue";

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

const projectsStore = useProjectsStore();

onMounted(() => {
  projectsStore.fetchProject(props.projectId);
});




</script>