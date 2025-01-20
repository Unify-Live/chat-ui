/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedResponse_ProjectResponse_ } from "../models/PaginatedResponse_ProjectResponse_";
import type { ProjectCreate } from "../models/ProjectCreate";
import type { ProjectResponse } from "../models/ProjectResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ProjectsCoreService {
  /**
   * Create a new project
   * Creates a new project with the provided name and optional description.
   *
   * - Generates a unique UUID for the project
   * - Stores creation timestamp automatically
   * - Returns the created project data
   * @param requestBody
   * @returns ProjectResponse Successful Response
   * @throws ApiError
   */
  public static createProject(
    requestBody: ProjectCreate,
  ): CancelablePromise<ProjectResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/projects",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad request`,
        403: `Not enough permissions`,
        404: `Project not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get all projects
   * Retrieves a paginated list of projects with optional search and filtering.
   * @param page
   * @param size
   * @param search
   * @param sortBy
   * @param sortOrder
   * @returns PaginatedResponse_ProjectResponse_ List of projects
   * @throws ApiError
   */
  public static getProjects(
    page: number = 1,
    size: number = 10,
    search?: string | null,
    sortBy?: string | null,
    sortOrder?: string | null,
  ): CancelablePromise<PaginatedResponse_ProjectResponse_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/projects",
      query: {
        page: page,
        size: size,
        search: search,
        sort_by: sortBy,
        sort_order: sortOrder,
      },
      errors: {
        400: `Bad request`,
        403: `Not enough permissions`,
        404: `Project not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get project details
   * @param projectUuid
   * @returns ProjectResponse Successful Response
   * @throws ApiError
   */
  public static getProject(
    projectUuid: string,
  ): CancelablePromise<ProjectResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/projects/{project_uuid}",
      path: {
        project_uuid: projectUuid,
      },
      errors: {
        400: `Bad request`,
        403: `Not enough permissions`,
        404: `Project not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update project details
   * @param projectUuid
   * @param requestBody
   * @returns ProjectResponse Successful Response
   * @throws ApiError
   */
  public static updateProject(
    projectUuid: string,
    requestBody: ProjectCreate,
  ): CancelablePromise<ProjectResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/projects/{project_uuid}",
      path: {
        project_uuid: projectUuid,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad request`,
        403: `Not enough permissions`,
        404: `Project not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Delete project
   * @param projectUuid
   * @returns void
   * @throws ApiError
   */
  public static deleteProject(projectUuid: string): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/projects/{project_uuid}",
      path: {
        project_uuid: projectUuid,
      },
      errors: {
        400: `Bad request`,
        403: `Not enough permissions`,
        404: `Project not found`,
        422: `Validation Error`,
      },
    });
  }
}
