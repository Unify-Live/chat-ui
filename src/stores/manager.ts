import type { Manager } from "../types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEditManagerStore = defineStore("manager", () => {
  const initialRole = ref("");
  const email = ref("");
  const fullName = ref("");
  const updatedRole = ref("");

  function haveRoleChanges() {
    return initialRole.value !== updatedRole.value;
  }

  function setInitialValues(manager: Manager) {
    initialRole.value = manager.role;
    email.value = manager.email;
    fullName.value = manager.fullName;
  }

  function reset() {
    initialRole.value = "";
    email.value = "";
    fullName.value = "";
    updatedRole.value = "";
  }

  return {
    initialRole,
    reset,
    email,
    fullName,
    updatedRole,
    haveRoleChanges,
    setInitialValues,
  };
});

export const role_options = [
  {
    value: "owner",
    label: "Owner",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "manager",
    label: "Manager",
  },
];

export const managersList: Manager[] = [
  {
    id: "1",
    email: "john.doe@example.com",
    fullName: "John Doe",
    role: "owner",
    projectId: 1,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    email: "jane.smith@example.com",
    fullName: "Jane Smith",
    role: "admin",
    projectId: 1,
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "3",
    email: "mike.wilson@example.com",
    fullName: "Mike Wilson",
    role: "manager",
    projectId: 1,
    createdAt: new Date("2024-03-10"),
  },
];
