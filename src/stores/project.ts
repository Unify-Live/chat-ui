// src/stores/project.ts
import type { Project } from "../types";

export const projectList: Project[] = [
  {
    id: 1,
    name: "Game Shop",
    newMessages: 5,
    totalDialogs: 120,
    integrations: 2,
    ownerId: "1",
    members: ["1"],
    createdAt: new Date(),
    lastActive: new Date(),
    activeIntegrations: 2,
  },
  {
    id: 2,
    name: "Key Store",
    newMessages: 2,
    totalDialogs: 45,
    integrations: 1,
    ownerId: "1",
    members: ["1"],
    createdAt: new Date(),
    lastActive: new Date(),
    activeIntegrations: 2,
  },
];
