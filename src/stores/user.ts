import { defineStore } from "pinia";
import { getCurrentInstance, onMounted, Ref, ref } from "vue";

export interface UserData {
  loggedIn: boolean;
  username?: string;
  email?: string;
  roles?: string[];
}

export const useUserStore = defineStore("user", () => {
  const user: Ref<UserData> = ref({
    loggedIn: true,
    username: "oleksandr",
    email: "oleksandr@boris.gy",
  });
  const darkMode: Ref<boolean> = ref(false);

  if (getCurrentInstance()) {
    onMounted(() => {
      const darkModeFromStorage = JSON.parse(
        localStorage.getItem("darkMode") || "false",
      );
      darkMode.value = darkModeFromStorage;
    });
  }

  const setDarkMode = (value: boolean) => {
    darkMode.value = value;
    localStorage.setItem("darkMode", JSON.stringify(value));
  };

  async function logout() {
    removeUser();
  }

  function removeUser() {
    user.value = { loggedIn: false };
  }

  return { user, darkMode, setDarkMode, removeUser, logout };
});
