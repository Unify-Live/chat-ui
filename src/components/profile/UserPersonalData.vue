<template>
  <n-card>
    <n-space vertical>
      <n-space>
        <n-avatar size="large" src="https://i.pravatar.cc/300" />
        <div>
          <p strong>{{ userStore.user.email }}</p>

          <p>{{ userStore.user.username }}</p>
        </div>
      </n-space>
      <n-divider />
      <n-space vertical>
        <n-text strong>Subscription Details</n-text>
        <n-text>Card Used: ************1007 </n-text>
        <n-text>Tariff Selected: MAX</n-text>
      </n-space>
      <n-divider />
      <n-space vertical>
        <n-text strong>User Restrictions</n-text>
        <n-text>Projects Used: {{ 1 }}/{{ 2 }}</n-text>
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts" setup>
import { NCard, NSpace, NAvatar, NText, NDivider } from "naive-ui";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<style scoped>
.user-personal-data {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.user-info,
.subscription-details,
.user-restrictions {
  margin-bottom: 20px;
}

h2,
h3 {
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
}
</style>
