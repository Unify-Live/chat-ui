/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedResponse_IntegrationResponse_ } from '../models/PaginatedResponse_IntegrationResponse_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntegrationsService {
    /**
     * Get project integrations
     * Retrieve a list of all integrations for the specified project
     * @param projectUuid
     * @param page
     * @param size
     * @param search
     * @param sortBy
     * @param sortOrder
     * @returns PaginatedResponse_IntegrationResponse_ Successful Response
     * @throws ApiError
     */
    public static getProjectIntegrationListIntegrationsProjectProjectUuidGet(
        projectUuid: string,
        page: number = 1,
        size: number = 10,
        search?: (string | null),
        sortBy?: (string | null),
        sortOrder?: (string | null),
    ): CancelablePromise<PaginatedResponse_IntegrationResponse_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/project/{project_uuid}',
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
                400: `Bad request`,
                403: `Not enough permissions`,
                404: `Integration not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete integration
     * Delete an integration regardless of its type
     * @param integrationUuid
     * @returns void
     * @throws ApiError
     */
    public static deleteIntegrationByIdIntegrationsIntegrationUuidDelete(
        integrationUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/integrations/{integration_uuid}',
            path: {
                'integration_uuid': integrationUuid,
            },
            errors: {
                400: `Bad request`,
                403: `Not enough permissions`,
                404: `Integration not found`,
                422: `Validation Error`,
            },
        });
    }
}
