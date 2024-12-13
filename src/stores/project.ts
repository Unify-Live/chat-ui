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
  const newProjectName = ref("");
  const newProjectDescription = ref("");

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

  function newProject() {
    try {
      ProjectsService.createProjectProjectsPost({
        name: newProjectName.value,
        description: newProjectDescription.value,
      }).then(() => {
        newProjectName.value = "";
        newProjectDescription.value = "";
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
    newProjectName,
    newProjectDescription,
  };
});
