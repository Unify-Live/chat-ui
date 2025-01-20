/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectInviteCreate } from "../models/ProjectInviteCreate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ProjectsInvitesService {
  /**
   * Create project invite
   * @param projectUuid
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createProjectInvite(
    projectUuid: string,
    requestBody: ProjectInviteCreate,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/projects/{project_uuid}/invites",
      path: {
        project_uuid: projectUuid,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Accept project invite
   * @param projectUuid
   * @returns any Successful Response
   * @throws ApiError
   */
  public static acceptProjectInvite(
    projectUuid: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/projects/{project_uuid}/invites/accept",
      path: {
        project_uuid: projectUuid,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
