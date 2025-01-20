<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="Create Project"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-form ref="formRef">
        <n-form-item path="name" label="Project Name">
          <n-input
            class="mb-4"
            id="ProjectName"
            v-model:value="projectStore.newProjectName"
            placeholder="Project Name"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="schema" label="Schema">
          <n-input
            class="mb-4"
            id="schema"
            v-model:value="projectStore.newProjectDescription"
            placeholder="Description"
            @keydown.enter.prevent
          />
        </n-form-item>
        <div style="display: flex; justify-content: flex-end">
          <n-button type="error" class="mr-4" @click="cancelProjectCreation"
            >Cancel</n-button
          >
          <n-button type="primary" @click="handleCreateProject">
            Save
          </n-button>
        </div>
      </n-form>
    </n-card>
  </n-modal>

  <div>
    <!-- Show selected project -->
    <n-space justify="space-between" align="center" class="header-space">
      Вибраний проект: {{ userStore.getSelectedProjectUuid() }}
    </n-space>
  </div>
  <n-space>
    <n-card title="New Project" size="small" class="project-card" hoverable>
      <n-button type="primary" @click="openModal">
        <n-icon><Add /></n-icon>
        New Project
      </n-button>
    </n-card>
    <n-card
      v-for="project in projectStore.projectList"
      :key="project.uuid"
      :title="project.name"
      size="small"
      class="project-card"
      hoverable
    >
      <n-space vertical>
        <p>Description: {{ project.description }}</p>
        <p>You role: {{ project.role_value }}</p>

        <n-button
          :disabled="userStore.getSelectedProjectUuid() == project.uuid"
          type="primary"
          @click="userStore.setSelectedProjectUuid(project.uuid)"
        >
          <n-icon><CheckmarkOutline /></n-icon>
          Select
        </n-button>
      </n-space>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useProjectsStore } from "@/stores/project";
import { useMessage } from "naive-ui";
import { Add, CheckmarkOutline } from "@vicons/ionicons5";
import { NButton, NIcon } from "naive-ui";

const projectStore = useProjectsStore();
const userStore = useUserStore();
const isLoading = ref(false);
const message = useMessage();
const showModal: Ref<boolean> = ref(false);

async function openModal() {
  showModal.value = true;
}

function cancelProjectCreation() {
  showModal.value = false;
}

function handleCreateProject() {
  projectStore.newProject();
  showModal.value = false;
  projectStore.fetchMyProjects();
  message.success("Project created successfully");
}

// Setup mobile detection
onMounted(() => {
  projectStore.fetchMyProjects();
});

onMounted(async () => {
  isLoading.value = true;
  // Add your data fetching logic here
  isLoading.value = false;
});
</script>
