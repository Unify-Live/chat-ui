<template>
    <h1>Integrations</h1>

    <n-space justify="space-between" align="center" class="header-space">
        
        <n-button @click="openModal" type="primary">
            <n-icon><Add /></n-icon>
            New telegram integration
        </n-button>
    </n-space>

    <n-modal v-model:show="showModal" title="Create new telegram integration" @update:show="cancelProjectCreation">
        <n-card
      style="width: 600px"
      title="Create Project"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    ><n-form label-placement="top">
            <n-form-item label="Name">
                <n-input v-model:value="telegramIntegrationStore.integrationName" />
            </n-form-item>
            <n-form-item label="Token">
                <n-input v-model:value="telegramIntegrationStore.newBotToken" />
            </n-form-item>
            <n-form-item label="Project">
                <n-input v-model:value="telegramIntegrationStore.projectUuid" />
            </n-form-item>
            <n-form-item label="Ask mobile number">
                <n-switch v-model:value="telegramIntegrationStore.askMobileNumber" />
            </n-form-item>
            <n-form-item label="Greetings message">
                <n-input v-model:value="telegramIntegrationStore.newBotGreetingsMessage" />
            </n-form-item>
            <n-form-item>
                <n-button type="primary" @click="handleCreateProject">
                    Save
                </n-button>
            </n-form-item>
        </n-form>
    </n-card>
    </n-modal>
</template>

<script lang="ts" setup>

import { useTelegramIntegrationStore } from '@/stores/telegramIntegration';
import { ref } from 'vue';

const showModal = ref(false);

const telegramIntegrationStore = useTelegramIntegrationStore();

const openModal = () => {
    showModal.value = true;
    console.log('open modal');
};

const cancelProjectCreation = () => {
    showModal.value = false;
};

const handleCreateProject = () => {
    telegramIntegrationStore.createIntegration();
    showModal.value = false;
};

// Represent button to create new telegram integration - we should use telegram integration store for that and fill up all needed variables, project uuid as well



</script>