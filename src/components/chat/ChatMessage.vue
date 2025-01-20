<template>
  <n-card
    bordered
    hoverable
    size="small"
    :class="{
      '!ml-auto': message.external_id,
    }"
    class="w-2/3"
  >
    <p>{{ message.sender_name }}</p>
    <span>{{ message.content }} </span>
    <p class="message-time">
      {{ message.created_at }}
    </p>
    <n-image
      v-if="message.attachments?.[0]"
      :src="fileUrl"
      class="mt-2"
    />


  </n-card>
</template>

<script setup lang="ts">
import { MessageResponse } from "@/client/backend/models/MessageResponse";
import { useFilesStore } from "@/stores/file";
import { ref, onMounted } from 'vue';

const props = defineProps<{
  message: MessageResponse;
}>();

const fileStore = useFilesStore();
const fileUrl = ref<string>('');
const isLoading = ref(true);

onMounted(async () => {
  if (props.message.attachments?.[0]) {
    try {
      fileUrl.value = await fileStore.getFile(props.message.attachments[0].uuid);
      console.log('File loaded:', fileUrl.value);
    } catch (error) {
      console.error('Failed to load file:', error);
    } finally {
      isLoading.value = false;
    }
  }
});
</script>
