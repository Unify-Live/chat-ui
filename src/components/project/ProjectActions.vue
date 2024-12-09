<template>
  <div class="w-full flex justify-center">
    <n-float-button-group
      shape="square"
      position="relative"
      :vertical="false"
      style="display: flex; flex-direction: row"
    >
      <router-link
        :to="`/project/${project.id}/integrations`"
        class="no-underline text-inherit"
      >
        <n-tooltip trigger="hover" placement="bottom">
          <template #trigger>
            <n-float-button>
              <n-icon><LinkSharp /></n-icon>
            </n-float-button>
          </template>
          Керувати інтеграціями
        </n-tooltip>
      </router-link>

      <router-link
        :to="`/project/${project.id}/managers`"
        class="no-underline text-inherit"
      >
        <n-tooltip trigger="hover" placement="bottom">
          <template #trigger>
            <n-float-button>
              <n-icon><People /></n-icon>
            </n-float-button>
          </template>
          Керувати менеджерами
        </n-tooltip>
      </router-link>

      <router-link
        :to="`/project/${project.id}/settings`"
        class="no-underline text-inherit"
      >
        <n-tooltip trigger="hover" placement="bottom">
          <template #trigger>
            <n-float-button>
              <n-icon><Cog /></n-icon>
            </n-float-button>
          </template>
          Редагувати проект
        </n-tooltip>
      </router-link>

      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-float-button>
            <n-icon><Trash /></n-icon>
          </n-float-button>
        </template>
        Видалити проект
      </n-tooltip>

      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-float-button>
            <n-icon><InformationCircleOutline /></n-icon>
          </n-float-button>
        </template>
        Інформація про проект
      </n-tooltip>

      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-float-button>
            <n-icon><LogOutOutline /></n-icon>
          </n-float-button>
        </template>
        Залишити проект
      </n-tooltip>
    </n-float-button-group>
  </div>
</template>

<script setup lang="ts">
import {
  LinkSharp,
  People,
  Trash,
  LogOutOutline,
  Cog,
  InformationCircleOutline,
} from "@vicons/ionicons5";
import type { Project } from "@/types";

defineProps<{
  project: Project;
}>();
</script>
