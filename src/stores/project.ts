// src/stores/project.ts
import {
  ProjectsCoreService,
  OpenAPI,
  ProjectsInvitesService,
  ProjectsUsersService,
} from "../client/backend";
import { getBackendUrl } from "../appConfig";
import {
  ProjectUserResponse,
  ApiError,
  ProjectInviteCreate,
} from "../client/backend";
import { PaginatedResponse_ProjectResponse_ } from "../client/backend/models/PaginatedResponse_ProjectResponse_";
import { defineStore } from "pinia";
import { ref } from "vue";
import { ProjectResponse } from "../client/backend/models/ProjectResponse";

OpenAPI.BASE = getBackendUrl();
OpenAPI.TOKEN = localStorage.getItem("userToken") || "";

export const useProjectsStore = defineStore("projectsStore", () => {
  const projectList = ref<ProjectResponse[]>([]);
  const currentProject = ref<ProjectResponse | null>(null);
  const newProjectName = ref("");
  const newProjectDescription = ref("");
  const currentProjectUsers = ref<ProjectUserResponse[]>([]);
  const newInviteEmail = ref("");

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

  function fetchProjectUsers(projectId: string) {
    try {
      ProjectsUsersService.getProjectUsers(projectId).then(
        (paginated_users) => {
          currentProjectUsers.value = paginated_users.items;
        },
      );
    } catch (error) {
      console.error("Getting project users:", error);
    }
  }

  async function inviteUserToProject(projectId: string, email: string) {
    const invite_payload: ProjectInviteCreate = { email };
    await ProjectsInvitesService.createProjectInvite(projectId, invite_payload);
    await fetchProjectUsers(projectId);
  }

  async function acceptProjectInvite(projectId: string) {
    try {
      ProjectsInvitesService.acceptProjectInvite(projectId).then(() => {
        fetchMyProjects();
      });
    } catch (error) {
      console.error("Accepting project invite:", error);
    }
  }

  function fetchProject(projectId: string) {
    try {
      ProjectsCoreService.getProject(projectId).then((project) => {
        console.log("Recived project:", project);
        currentProject.value = project;
      });
    } catch (error) {
      console.error("Getting project:", error);
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
    acceptProjectInvite,
    inviteUserToProject,
    newInviteEmail,
    currentProject,
    fetchProject,
    newProjectName,
    fetchProjectUsers,
    currentProjectUsers,
    newProjectDescription,
  };
});
