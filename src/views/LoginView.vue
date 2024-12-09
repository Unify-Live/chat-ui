<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <n-card class="w-[400px]">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold mb-2">Welcome to ChatMate</h1>
        <p class="text-gray-500">
          Sign in to manage your customer communications
        </p>
      </div>

      <n-space vertical size="large">
        <n-button
          block
          secondary
          @click="handleGithubLogin"
          :loading="isGithubLoading"
        >
          <template #icon>
            <n-icon><logo-github /></n-icon>
          </template>
          Continue with GitHub
        </n-button>

        <n-button
          block
          secondary
          @click="handleGoogleLogin"
          :loading="isGoogleLoading"
        >
          <template #icon>
            <n-icon><logo-google /></n-icon>
          </template>
          Continue with Google
        </n-button>

        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <n-button
          block
          type="primary"
          @click="handleDemoLogin"
          :loading="isDemoLoading"
        >
          Try Demo Account
        </n-button>
      </n-space>

      <template #footer>
        <div class="text-center text-sm text-gray-500">
          By signing in, you agree to our
          <n-a href="#" target="_blank">Terms of Service</n-a>
          and
          <n-a href="#" target="_blank">Privacy Policy</n-a>
        </div>
      </template>
    </n-card>

    <n-modal v-model:show="showError">
      <n-card
        style="width: 400px"
        title="Authentication Error"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <template #header-extra>
          <n-button circle size="small" @click="showError = false">
            <template #icon>
              <n-icon><close /></n-icon>
            </template>
          </n-button>
        </template>

        <div class="text-center">
          <p>{{ errorMessage }}</p>
        </div>

        <template #footer>
          <div class="flex justify-end">
            <n-button @click="showError = false">Close</n-button>
          </div>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { Close, LogoGithub, LogoGoogle } from "@vicons/ionicons5";

const router = useRouter();
const message = useMessage();

const isGithubLoading = ref(false);
const isGoogleLoading = ref(false);
const isDemoLoading = ref(false);
const showError = ref(false);
const errorMessage = ref("");

const handleGithubLogin = async () => {
  try {
    isGithubLoading.value = true;
    // TODO: Implement GitHub OAuth
    // Mock successful login for now
    await mockAuthDelay();
    localStorage.setItem(
      "user",
      JSON.stringify({ provider: "github", id: "123" }),
    );
    message.success("Successfully logged in with GitHub");
    router.push("/");
  } catch (error) {
    errorMessage.value =
      "Failed to authenticate with GitHub. Please try again.";
    showError.value = true;
  } finally {
    isGithubLoading.value = false;
  }
};

const handleGoogleLogin = async () => {
  try {
    isGoogleLoading.value = true;
    // TODO: Implement Google OAuth
    // Mock successful login for now
    await mockAuthDelay();
    localStorage.setItem(
      "user",
      JSON.stringify({ provider: "google", id: "456" }),
    );
    message.success("Successfully logged in with Google");
    router.push("/");
  } catch (error) {
    errorMessage.value =
      "Failed to authenticate with Google. Please try again.";
    showError.value = true;
  } finally {
    isGoogleLoading.value = false;
  }
};

const handleDemoLogin = async () => {
  try {
    isDemoLoading.value = true;
    await mockAuthDelay();
    localStorage.setItem(
      "user",
      JSON.stringify({ provider: "demo", id: "demo" }),
    );
    message.success("Logged in with demo account");
    router.push("/");
  } catch (error) {
    errorMessage.value = "Failed to login with demo account. Please try again.";
    showError.value = true;
  } finally {
    isDemoLoading.value = false;
  }
};

// Mock authentication delay
const mockAuthDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));
</script>
