// src/stores/project.ts
import { ProjectsService, OpenAPI } from "../client/backend";
import { getBackendUrl } from "../appConfig";
import { defineStore } from "pinia";
import { ref } from "vue";
import { ProjectResponse } from "../client/backend/models/ProjectResponse";

OpenAPI.BASE = getBackendUrl();
OpenAPI.TOKEN = localStorage.getItem("userToken") || "";

export const useProjectsStore = defineStore("projectsStore", () => {
  const projectList = ref<ProjectResponse[]>([]);

  function fetchMyProjects() {
    try {
      ProjectsService.getProjectsProjectsGet().then(
        (projects: ProjectResponse[]) => {
          console.log(projects);
          projectList.value = projects;
        },
      );
    } catch (error) {
      console.error("Getting projects list:", error);
    }
  }

  function newProject(name: string, description: string) {
    try {
      ProjectsService.createProjectProjectsPost({
        name: name,
        description: description,
      }).then(() => {
        fetchMyProjects();
      });
    } catch (error) {
      console.error("Creating new project:", error);
    }
  }

  return {
    projectList,
    fetchMyProjects,
    newProject,
  };
});
