/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WidgetIntegrationCreate } from '../models/WidgetIntegrationCreate';
import type { WidgetIntegrationResponse } from '../models/WidgetIntegrationResponse';
import type { WidgetIntegrationUpdate } from '../models/WidgetIntegrationUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntegrationsWidgetService {
    /**
     * Create widget integration
     * Create a new widget integration for the project
     * @param projectUuid
     * @param requestBody
     * @returns WidgetIntegrationResponse Successful Response
     * @throws ApiError
     */
    public static createWidgetIntegrationsWidgetPost(
        projectUuid: string,
        requestBody: WidgetIntegrationCreate,
    ): CancelablePromise<WidgetIntegrationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/widget',
            query: {
                'project_uuid': projectUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Not enough permissions`,
                404: `Integration not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get widget integration
     * Get details of a specific widget integration
     * @param integrationUuid
     * @returns WidgetIntegrationResponse Successful Response
     * @throws ApiError
     */
    public static getWidgetIntegrationsWidgetIntegrationUuidGet(
        integrationUuid: string,
    ): CancelablePromise<WidgetIntegrationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/widget/{integration_uuid}',
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
    /**
     * Update widget integration
     * Update an existing widget integration
     * @param integrationUuid
     * @param requestBody
     * @returns WidgetIntegrationResponse Successful Response
     * @throws ApiError
     */
    public static updateWidgetIntegrationsWidgetIntegrationUuidPut(
        integrationUuid: string,
        requestBody: WidgetIntegrationUpdate,
    ): CancelablePromise<WidgetIntegrationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/integrations/widget/{integration_uuid}',
            path: {
                'integration_uuid': integrationUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Not enough permissions`,
                404: `Integration not found`,
                422: `Validation Error`,
            },
        });
    }
}
