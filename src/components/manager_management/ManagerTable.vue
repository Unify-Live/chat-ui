<template>
  <div class="main" id="main">
    <n-space justify="space-between" align="center" class="header-space">
      <h1>Менеджери проекту</h1>
      <n-button @click="openInviteManagerModal" type="primary">
        <n-icon><Add /></n-icon>
        Запросити менеджера
      </n-button>
    </n-space>

    <!-- Desktop View -->
    <n-data-table
      v-if="!isMobile"
      :columns="columns"
      :data="managersList"
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
      id="ManagersTable"
      class="managers-table"
    />

    <!-- Mobile View -->
    <div v-else class="cards-container">
      <n-card
        v-for="manager in managersList"
        :key="manager.email"
        class="manager-card"
      >
        <!-- Card Header with Manager Name and Role -->
        <template #header>
          <div class="card-header">
            <div class="manager-info">
              <span class="manager-name">{{ manager.fullName }}</span>
              <span class="manager-role">{{ manager.role }}</span>
            </div>
          </div>
        </template>

        <!-- Card Content with Manager Details -->
        <div class="card-content">
          <div class="email-container">
            <span class="label">Email:</span>
            <span class="email-value">{{ manager.email }}</span>
          </div>
        </div>

        <!-- Card Footer with Actions -->
        <template #footer>
          <div class="card-actions">
            <ManagerActions :manager="manager" />
          </div>
        </template>
      </n-card>

      <!-- Mobile Pagination -->
      <n-pagination
        v-model:page="currentPage"
        :page-count="Math.ceil(managersList.length / tablePageSize)"
        :page-size="tablePageSize"
        show-size-picker
        :page-sizes="[10, 25]"
        @update:page-size="tablePageSize = $event"
        class="mobile-pagination"
      />
    </div>

    <!-- Invite Manager Modal -->
    <n-modal v-model:show="inviteManagerModal">
      <n-card
        class="invite-modal"
        :title="`Запросити менеджера`"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-input
          v-model:value="invitedManagerEmail"
          placeholder="Електронна пошта менеджера"
          class="modal-input"
        />
        <n-select
          :options="role_options"
          v-model:value="invitedManagerRole"
          placeholder="Посада"
          class="modal-input"
        />
        <div class="modal-actions">
          <n-button
            type="error"
            class="modal-button"
            @click="cancelInvitingManager"
          >
            Скасувати
          </n-button>
          <n-button type="primary" @click="handleInviteManager">
            Запросити
          </n-button>
        </div>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, h, Ref, onMounted, onUnmounted } from "vue";
// import { projectList } from "@/stores/project";
import { DataTableColumns, NButton } from "naive-ui";
import { managersList } from "@/stores/manager";
import type { Manager } from "@/types";
import ManagerActions from "./ManagerActions.vue";
import { Add } from "@vicons/ionicons5";
import { role_options } from "@/stores/manager";
import { useMessage } from "naive-ui";

const message = useMessage();
const inviteManagerModal: Ref<boolean> = ref(false);
const invitedManagerEmail: Ref<string> = ref("");
const invitedManagerRole: Ref<string> = ref("");
const currentPage = ref(1);
const isMobile = ref(false);

// Check for mobile viewport
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// Setup mobile detection
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

async function openInviteManagerModal() {
  inviteManagerModal.value = true;
}

async function handleInviteManager() {
  invitedManagerEmail.value = "";
  invitedManagerRole.value = "";
  inviteManagerModal.value = false;
  message.success(`Запрошено менеджера!`);
}

async function cancelInvitingManager() {
  inviteManagerModal.value = false;
}

const isLoading = ref(false);
const tablePageSize = ref(25);

const columns: DataTableColumns<Manager> = [
  {
    key: "fullName",
    title: "Повне ім'я",
    align: "center",
    sorter: "default",
  },
  {
    key: "email",
    title: "Email",
    align: "center",
    sorter: "default",
  },
  {
    key: "role",
    title: "Посада",
    align: "center",
  },
  {
    key: "actions",
    title: "Дії",
    align: "center",
    render: (row: Manager) => h(ManagerActions, { manager: row }),
  },
];

function scrollToTopOfTable() {
  document
    .getElementById("ManagersTable")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
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

.managers-table {
  white-space: nowrap;
  margin-bottom: 1.25rem;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.manager-card {
  position: relative;
  transition: all 0.3s ease;
}

.manager-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.manager-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.manager-name {
  font-size: 1.125rem;
  font-weight: 500;
}

.manager-role {
  font-size: 0.875rem;
  color: #666;
}

.card-content {
  padding: 0.75rem 0;
}

.email-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.label {
  font-size: 0.875rem;
  color: #666;
}

.email-value {
  font-size: 1rem;
}

.card-actions {
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
}

.mobile-pagination {
  margin: 1rem 0;
}

/* Modal Styling */
.invite-modal {
  width: 600px;
}

.modal-input {
  margin-bottom: 1rem;
}

.modal-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.modal-button {
  margin-right: 0.5rem;
}

/* Mobile Specific Styles */
@media (max-width: 768px) {
  .main {
    max-width: 95%;
  }

  .cards-container {
    padding: 0.5rem 0;
  }

  .manager-card {
    margin-bottom: 1rem;
  }

  .invite-modal {
    width: 90%;
    max-width: 600px;
  }

  .modal-actions {
    flex-direction: column;
  }

  .modal-actions button {
    width: 100%;
    margin: 0.25rem 0;
  }
}

/* Loading State */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Theme Variables */
:root {
  --primary-color: #18a058;
  --card-border-radius: 8px;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>
