<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="Запросити учасника"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-form ref="formRef">
        <n-form-item path="name" label="Email">
          <n-input
            class="mb-4"
            id="newInviteEmail"
            v-model:value="projectStore.newInviteEmail"
            placeholder="Email"
            @keydown.enter.prevent
            :loading="isInviteLoading"
          />
        </n-form-item>
      </n-form>
      <div style="display: flex; justify-content: flex-end">
        <n-button type="error" class="mr-4" @click="cancelInite"
          >Cancel</n-button
        >
        <n-button type="primary" @click="sendInvite" :loading="isInviteLoading">
          Save
        </n-button>
      </div>
    </n-card>
  </n-modal>
  <n-space class="mb-10">
    <h1>Команда проекту</h1>

    <n-button type="primary" @click="openModal"> Запросити учасника </n-button>
  </n-space>
  <TeamTable />
</template>

<script setup lang="ts">
import { useProjectsStore } from "@/stores/project";
import { useUserStore } from "@/stores/user";
import TeamTable from "@/components/team/TeamTable.vue";
import { ref, Ref, onMounted } from "vue";
import { useMessage } from "naive-ui";

const message = useMessage();
const isInviteLoading: Ref<boolean> = ref(false);
const userStore = useUserStore();
const projectStore = useProjectsStore();
const showModal: Ref<boolean> = ref(false);
async function openModal() {
  console.log("openModal");
  showModal.value = true;
  console.log(showModal.value);
}

onMounted(() => {
  console.log(projectStore.currentProject);
  const projectUuid = userStore.getSelectedProjectUuid();
  if (!projectUuid) {
    message.error("No project selected");
    return;
  }
});

async function sendInvite() {
  isInviteLoading.value = true;
  const projectUuid = userStore.getSelectedProjectUuid();

  try {
    if (!projectUuid) {
      throw new Error("No project selected");
    }

    if (!projectStore.newInviteEmail) {
      throw new Error("Please enter an email address");
    }

    await projectStore.inviteUserToProject(
      projectUuid,
      projectStore.newInviteEmail,
    );

    // Success case
    message.success("Invitation sent successfully");
    projectStore.newInviteEmail = "";
    showModal.value = false;
  } catch (error: unknown) {
    // First define the type we expect
    type ApiErrorType = {
      body: { detail: string };
      status: number;
      statusText: string;
    };

    // Then do proper type checking
    if (
      error instanceof Error &&
      "body" in error &&
      "status" in error &&
      "statusText" in error
    ) {
      // Now we can safely cast to our type
      const apiError = error as unknown as ApiErrorType;

      message.error(apiError.body.detail || "Failed to send invitation");
      console.log("API Error:", {
        status: apiError.status,
        message: apiError.body.detail,
        statusText: apiError.statusText,
      });
    } else if (error instanceof Error) {
      message.error(error.message);
    } else {
      message.error("An unknown error occurred");
    }
  } finally {
    isInviteLoading.value = false;
  }
}

function cancelInite() {
  projectStore.newInviteEmail = "";
  showModal.value = false;
}
</script>
