// src/stores/project.ts
import { ProjectsCoreService, OpenAPI } from "../client/backend";
import { getBackendUrl } from "../appConfig";
import { PaginatedResponse_ProjectResponse_ } from "../client/backend/models/PaginatedResponse_ProjectResponse_";
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
      ProjectsCoreService.getProjects().then(
        (paginated_project_response: PaginatedResponse_ProjectResponse_) => {
          console.log(paginated_project_response);
          projectList.value = paginated_project_response.items;
          console.log("Recived projects list:", projectList.value);
        },
      );
    } catch (error) {
      console.error("Getting projects list:", error);
    }
  }

  function newProject() {
    try {
      ProjectsCoreService.createProject({
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
