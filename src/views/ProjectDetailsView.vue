<template>
  <div>
    <h1>Project Details</h1>
    <n-card title="Project Details" class="mb-4">
      <n-space direction="vertical">
        <n-text>
          <span class="font-semibold">UUID:</span>
          {{ projectsStore.currentProject?.uuid }}
        </n-text>
        <n-text>
          <span class="font-semibold">Name:</span>
          {{ projectsStore.currentProject?.name }}
        </n-text>
        <n-text>
          <span class="font-semibold">Description:</span>
          {{ projectsStore.currentProject?.description }}
        </n-text>
        <n-text>
          <span class="font-semibold">Created At:</span>
          {{ projectsStore.currentProject?.created_at }}
        </n-text>
      </n-space>
    </n-card>
    <n-space vertical class="mt-4">
      <n-card title="Процес налаштування проекту">
        <ProjectSettingsSteps />
      </n-card>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import ProjectSettingsSteps from "@/components/project/ProjectSettingsSteps.vue";
import { useProjectsStore } from "@/stores/project";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useMessage } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();
const message = useMessage();
const projectsStore = useProjectsStore();
const userStore = useUserStore();

onMounted(() => {
  const projectSelectedUuid = userStore.getSelectedProjectUuid();
  if (!projectSelectedUuid) {
    message.warning("Ви не вибрали проект, виберіть його");
    router.push("/projects");
    return;
  }
  console.log("Project selected UUID", projectSelectedUuid);
  projectsStore.fetchProject(projectSelectedUuid);
});
</script>
