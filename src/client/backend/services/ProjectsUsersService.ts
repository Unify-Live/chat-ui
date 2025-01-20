/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedResponse_ProjectUserResponse_ } from '../models/PaginatedResponse_ProjectUserResponse_';
import type { ProjectUserResponse } from '../models/ProjectUserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectsUsersService {
    /**
     * Get project users
     * Retrieves a paginated list of project users with optional search and filtering.
     * @param projectUuid
     * @param page
     * @param size
     * @param search
     * @param sortBy
     * @param sortOrder
     * @returns PaginatedResponse_ProjectUserResponse_ Successful Response
     * @throws ApiError
     */
    public static getProjectUsers(
        projectUuid: string,
        page: number = 1,
        size: number = 10,
        search?: (string | null),
        sortBy?: (string | null),
        sortOrder?: (string | null),
    ): CancelablePromise<PaginatedResponse_ProjectUserResponse_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project_uuid}/users',
            path: {
                'project_uuid': projectUuid,
            },
            query: {
                'page': page,
                'size': size,
                'search': search,
                'sort_by': sortBy,
                'sort_order': sortOrder,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update user role
     * @param projectUuid
     * @param userUuid
     * @param role
     * @returns ProjectUserResponse Successful Response
     * @throws ApiError
     */
    public static updateUserRole(
        projectUuid: string,
        userUuid: string,
        role: string,
    ): CancelablePromise<ProjectUserResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/projects/{project_uuid}/users/{user_uuid}',
            path: {
                'project_uuid': projectUuid,
                'user_uuid': userUuid,
            },
            query: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove user from project
     * @param projectUuid
     * @param userUuid
     * @returns void
     * @throws ApiError
     */
    public static removeUserFromProject(
        projectUuid: string,
        userUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/projects/{project_uuid}/users/{user_uuid}',
            path: {
                'project_uuid': projectUuid,
                'user_uuid': userUuid,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
