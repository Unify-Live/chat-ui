/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectInviteCreate } from '../models/ProjectInviteCreate';
import type { ProjectInviteResponse } from '../models/ProjectInviteResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectsInvitesService {
    /**
     * Create project invite
     * @param projectUuid
     * @param requestBody
     * @returns ProjectInviteResponse Successful Response
     * @throws ApiError
     */
    public static createProjectInvite(
        projectUuid: string,
        requestBody: ProjectInviteCreate,
    ): CancelablePromise<ProjectInviteResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/{project_uuid}/invites',
            path: {
                'project_uuid': projectUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get project invites
     * @param projectUuid
     * @returns ProjectInviteResponse Successful Response
     * @throws ApiError
     */
    public static getProjectInvites(
        projectUuid: string,
    ): CancelablePromise<Array<ProjectInviteResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project_uuid}/invites',
            path: {
                'project_uuid': projectUuid,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Accept project invite
     * @param token
     * @returns any Successful Response
     * @throws ApiError
     */
    public static acceptProjectInvite(
        token: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/{project_uuid}/invites/accept/{token}',
            path: {
                'token': token,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel project invite
     * @param projectUuid
     * @param inviteUuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public static cancelProjectInvite(
        projectUuid: string,
        inviteUuid: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/{project_uuid}/invites/{invite_uuid}/cancel',
            path: {
                'project_uuid': projectUuid,
                'invite_uuid': inviteUuid,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
