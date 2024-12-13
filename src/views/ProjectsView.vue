<template>
  <div class="main" id="main">
    <n-space justify="space-between" align="center" class="header-space">
      <h1>Мої проекти</h1>
      <n-button @click="createNewProject" type="primary">
        <n-icon><Add /></n-icon>
        Новий проект
      </n-button>
    </n-space>

    <!-- Desktop View -->
    <n-data-table
      v-if="!isMobile"
      :columns="columns"
      :data="projectStore.projectList"
      :loading="isLoading"
      :scroll-x="1000"
      table-layout="fixed"
      :pagination="{
        showSizePicker: true,
        pageSizes: [10, 25],
        pageSize: tablePageSize,
        onUpdatePageSize: (newPageSize: number) => {
          tablePageSize = newPageSize;
          scrollToTopOfTable();
        },
      }"
      id="ProjectsTable"
      class="projects-table"
    />

    <!-- Mobile View -->
    <div v-else class="cards-container">
      <n-card
        v-for="project in projectStore.projectList"
        :key="project.uuid"
        class="project-card"
      >
        <!-- Card Header with Project Name and New Messages Badge -->
        <template #header>
          <div class="card-header">
            <router-link :to="`/project/${project.uuid}`" class="project-link">
              {{ project.name }}
            </router-link>
          </div>
        </template>

        <!-- Card Footer with Actions -->
        <template #footer>
          <div class="card-actions">
            <ProjectActions :project="project" />
          </div>
        </template>
      </n-card>

      <!-- Mobile Pagination -->
      <n-pagination
        v-model:page="currentPage"
        :page-count="Math.ceil(projectStore.projectList.length / tablePageSize)"
        :page-size="tablePageSize"
        show-size-picker
        :page-sizes="[10, 25]"
        @update:page-size="tablePageSize = $event"
        class="mobile-pagination"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, h } from "vue";
import { useProjectsStore } from "@/stores/project";
import { ProjectResponse } from "../client/backend/models/ProjectResponse";
import { DataTableColumns } from "naive-ui";
import ProjectActions from "@/components/project/ProjectActions.vue";
import { useMessage } from "naive-ui";
import { Add } from "@vicons/ionicons5";
import { RouterLink } from "vue-router";

const projectStore = useProjectsStore();
const message = useMessage();
const isLoading = ref(false);
const tablePageSize = ref(25);
const currentPage = ref(1);
const isMobile = ref(false);

// Check for mobile viewport
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// Setup mobile detection
onMounted(() => {
  projectStore.fetchMyProjects();
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

async function createNewProject() {
  message.success(`Not yet implemented`);
}

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
    key: "newMessages",
    title: "Нові повідомлення",
    align: "center",
    sorter: "default",
  },
  {
    key: "actions",
    title: "Дії",
    align: "center",
    className: "flex justify-center",
    render: (row: ProjectResponse) => h(ProjectActions, { project: row }),
  },
];

function scrollToTopOfTable() {
  document
    .getElementById("ProjectsTable")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

onMounted(async () => {
  isLoading.value = true;
  // Add your data fetching logic here
  isLoading.value = false;
});
</script>

<style scoped>
.main {
  margin: 0 auto;
  max-width: 85%;
  min-height: calc(100vh - 3.5rem);
}

.header-space {
  margin-bottom: 1rem;
}

.projects-table {
  white-space: nowrap;
  margin-bottom: 1.25rem;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  position: relative;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-with-messages {
  border-left: 4px solid var(--primary-color);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-link {
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--primary-color);
}

.card-content {
  padding: 0.5rem 0;
}

.card-actions {
  display: flex;
  justify-content: center;
}

.mobile-pagination {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

/* Optional: Add custom scrollbar for better mobile experience */
@media (max-width: 768px) {
  .main {
    max-width: 95%;
  }

  .cards-container {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0.5rem 0;
  }

  .project-card {
    margin-bottom: 1rem;
  }
}

/* Optional: Add loading state styling */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Optional: Add CSS variables for theming */
:root {
  --primary-color: #18a058;
  --card-border-radius: 8px;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>
