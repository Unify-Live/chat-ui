// components/ProjectSteps.vue
<template>
  <n-space vertical>
    <n-steps
      vertical
      :current="current"
      status="process"
      @update:current="handleStepClick"
    >
      <n-step
        title="Проект створено"
        description="Початкове налаштування та налаштування проекту"
        status="finish"
      />
      <n-step
        title="Додавання інтеграції віджетів"
        description="Додайте інтеграцію віджетів на свій веб-сайт, щоб мати можливість спілкуватися з клієнтами звідти"
        status="process"
      />
      <n-step
        title="Запрошуйте менеджерів"
        description="Запросіть більше менеджерів у свій проект"
      />
    </n-steps>
  </n-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const current = ref<number>(1);
const router = useRouter();

const handleStepClick = (step: number) => {
  console.log("Step clicked", step);
  if (step === 2) {
    current.value = 2;
    router.push("/integrations");
  } else if (step === 3) {
    router.push("/projects");
  }
};
</script>
