/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectCreate } from "../models/ProjectCreate";
import type { ProjectResponse } from "../models/ProjectResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ProjectsService {
  /**
   * Get all projects
   * Retrieves a list of all projects ordered by creation date.
   * @returns ProjectResponse List of projects
   * @throws ApiError
   */
  public static getProjectsProjectsGet(): CancelablePromise<
    Array<ProjectResponse>
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/projects",
      errors: {
        400: `Bad request`,
      },
    });
  }
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
  public static createProjectProjectsPost(
    requestBody: ProjectCreate,
  ): CancelablePromise<ProjectResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/projects",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad request`,
        422: `Validation Error`,
      },
    });
  }
}
