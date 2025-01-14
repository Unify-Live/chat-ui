<template>
  <div class="space-y-4">
    <div class="mb-6 flex space-x-2 border-b px-4 py-2.5">
      <n-avatar
        size="large"
        src="https://i.pravatar.cc/300"
        class="rounded-full"
      />
      <div class="flex-1">
        <p class="font-medium">Сарочка</p>
        <p class="text-gray-500">Клієнт</p>
      </div>

      <div>
        <span class="inline-block size-2 rounded-full bg-green-500" />
        <span class="text-sm text-gray-500"> Online </span>
      </div>
    </div>

    <div class="m-4 rounded-lg border p-4">
      <p class="text-sm font-medium">Інформація про клієнта</p>

      <p class="mt-4 text-xs text-gray-500">Дата приєднання</p>
      <p class="text-sm">Січень 2025</p>

      <p class="mt-4 text-xs text-gray-500">Телефон</p>
      <p class="text-sm">+380 99 999 99 99</p>

      <p class="mt-4 text-xs text-gray-500">Email</p>
      <p class="text-sm">sarah@example.com</p>

      <p class="mt-4 text-xs text-gray-500">Місцина</p>
      <p class="text-sm">село Брошурки</p>
    </div>

    <n-button
      type="error"
      class="m-4 w-[calc(100%-2rem)] space-x-2 rounded-lg bg-danger"
    >
      <n-icon :component="BanOutline" size="18" class="mr-2" />

      Заблокувати контакт
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { BanOutline } from "@vicons/ionicons5";
</script>
