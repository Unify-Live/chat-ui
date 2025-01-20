<template>
  <n-data-table
    :data="projectsStore.currentProjectUsers"
    :columns="columns"
    :single-line="false"
    :loading="isLoading"
    empty-text="No Users"
  >
  </n-data-table>
</template>

<script lang="ts" setup>
import { useProjectsStore } from "@/stores/project";
import { onMounted } from "vue";
import { ref } from "vue";
import { useMessage } from "naive-ui";
import { useUserStore } from "@/stores/user";

const message = useMessage();
const isLoading = ref(false);
const projectsStore = useProjectsStore();
const userStore = useUserStore();

onMounted(() => {
  console.log(projectsStore.currentProject);
  const projectUuid = userStore.getSelectedProjectUuid();
  if (!projectUuid) {
    message.error("No project selected");
    return;
  }
  isLoading.value = true;
  projectsStore.fetchProjectUsers(projectUuid);
  isLoading.value = false;
});

const columns = [
  {
    title: "user_uuid",
    key: "user_uuid",
    sortable: true,
    defaultSortOrder: "ascend",
  },
  {
    title: "email",
    key: "email",
    sortable: true,
    defaultSortOrder: "ascend",
  },
  {
    title: "role_value",
    key: "role_value",
    sortable: true,
    defaultSortOrder: "ascend",
  },
  {
    title: "joined_at",
    key: "joined_at",
    sortable: true,
    defaultSortOrder: "ascend",
  },
];
</script>
