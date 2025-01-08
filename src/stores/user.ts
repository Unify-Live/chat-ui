import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { jwtDecode } from "jwt-decode";
import type { Router } from "vue-router";

export interface UserData {
  loggedIn: boolean;
  username?: string;
  email?: string;
  roles?: string[];
  token?: string;
  uid?: string;
}

interface JwtPayload {
  sub: string;
  email: string;
  name: string;
  preferred_username: string;
  groups: string[];
  uid: string;
}

export const useUserStore = defineStore("user", () => {
  const user: Ref<UserData> = ref({
    loggedIn: false,
  });
  const selectedProjectUuid = ref<string | null>(null);
  const darkMode: Ref<boolean> = ref(false);

  function setSelectedProjectUuid(uuid: string) {
    selectedProjectUuid.value = uuid;
    localStorage.setItem("selectedProjectUuid", uuid);
  }

  function removeSelectedProjectUuid() {
    selectedProjectUuid.value = null;
    localStorage.removeItem("selectedProjectUuid");
  }

  function getSelectedProjectUuid() {
    // First try to get from ref
    if (!selectedProjectUuid.value) {
      // Then try to get from localStorage
      const storedUuid = localStorage.getItem("selectedProjectUuid");
      selectedProjectUuid.value = storedUuid;
    }

    return selectedProjectUuid.value;
  }

  function setUserFromToken(token: string) {
    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      user.value = {
        loggedIn: true,
        username: decodedToken.preferred_username || decodedToken.name,
        email: decodedToken.email,
        roles: decodedToken.groups,
        token: token,
        uid: decodedToken.uid,
      };
      localStorage.setItem("userToken", token);
    } catch (error) {
      console.error("Error decoding token:", error);
      removeUser();
    }
  }

  const setDarkMode = (value: boolean) => {
    darkMode.value = value;
    localStorage.setItem("darkMode", JSON.stringify(value));
  };

  async function logout() {
    removeUser();
    // Optional: Add logout logic like calling a backend endpoint
  }

  function removeUser() {
    user.value = { loggedIn: false };
    localStorage.removeItem("userToken");
  }

  return {
    user,
    darkMode,
    setDarkMode,
    removeUser,
    logout,
    setUserFromToken,
    getSelectedProjectUuid,
    setSelectedProjectUuid,
    removeSelectedProjectUuid,
  };
});
