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

  <div class="main" id="main">
    <n-space justify="space-between" align="center" class="header-space">
      <h1>Мої проекти</h1>
      <n-button @click="openModal" type="primary">
        <n-icon><Add /></n-icon>
        Новий проект
      </n-button>
    </n-space>

    <n-data-table
      :columns="columns"
      :data="projectStore.projectList"
      :loading="isLoading"
      :scroll-x="1000"
      table-layout="fixed"
      id="ProjectsTable"
      class="projects-table"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, h, Ref } from "vue";
import { useProjectsStore } from "@/stores/project";
import { ProjectResponse } from "../client/backend/models/ProjectResponse";
import { DataTableColumns } from "naive-ui";
import { useMessage } from "naive-ui";
import { Add } from "@vicons/ionicons5";
import { RouterLink } from "vue-router";

const projectStore = useProjectsStore();
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


const columns: DataTableColumns<ProjectResponse> = [
  {
    key: "name",
    title: "Ім'я",
    align: "center",
    sorter: "default",
    render: (row: ProjectResponse) => {
      return h(
        RouterLink,
        {
          to: `/project/${row.uuid}`,
          title: "Go Project details",
          id: "ProjectId",
          style: {
            textDecoration: "none",
            color: "inherit",
          },
        },
        () => row.name,
      );
    },
  },
  {
    key: "uuid",
    title: "UUID",
    align: "center",
    sorter: "default",
    render: (row: ProjectResponse) => {
      return row.uuid;
    },
  }
];

onMounted(async () => {
  isLoading.value = true;
  // Add your data fetching logic here
  isLoading.value = false;
});
</script>

