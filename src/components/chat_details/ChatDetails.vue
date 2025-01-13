<template>
  <div class="space-y-4">
    <div class="flex space-x-2 px-4 py-2.5 border-b mb-6">
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
        <span class="bg-green-500 rounded-full size-2 inline-block" />
        <span class="text-gray-500 text-sm"> Online </span>
      </div>
    </div>

    <div class="p-4 m-4 border rounded-lg">
      <p class="text-sm font-medium">Інформація про клієнта</p>

      <p class="text-gray-500 text-xs mt-4">Дата приєднання</p>
      <p class="text-sm">Січень 2025</p>

      <p class="text-gray-500 text-xs mt-4">Телефон</p>
      <p class="text-sm">+380 99 999 99 99</p>

      <p class="text-gray-500 text-xs mt-4">Email</p>
      <p class="text-sm">sarah@example.com</p>

      <p class="text-gray-500 text-xs mt-4">Місцина</p>
      <p class="text-sm">село Брошурки</p>
    </div>

    <n-button
      type="error"
      class="m-4 bg-red-500 space-x-2 rounded-lg w-[calc(100%-2rem)]"
    >
      <n-icon :component="BanOutline" size="18" class="mr-2" />

      Заблокувати контакт
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { BanOutline } from "@vicons/ionicons5";
</script>
