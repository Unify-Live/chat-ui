/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomApiIntegrationCreate } from '../models/CustomApiIntegrationCreate';
import type { CustomApiIntegrationResponse } from '../models/CustomApiIntegrationResponse';
import type { CustomApiIntegrationUpdate } from '../models/CustomApiIntegrationUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntegrationsCustomApiService {
    /**
     * Create custom API integration
     * Create a new custom API integration for the project
     * @param projectUuid
     * @param requestBody
     * @returns CustomApiIntegrationResponse Successful Response
     * @throws ApiError
     */
    public static createCustomApiIntegrationsCustomApiPost(
        projectUuid: string,
        requestBody: CustomApiIntegrationCreate,
    ): CancelablePromise<CustomApiIntegrationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/custom-api',
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
     * Get custom API integration
     * Get details of a specific custom API integration
     * @param integrationUuid
     * @returns CustomApiIntegrationResponse Successful Response
     * @throws ApiError
     */
    public static getCustomApiIntegrationsCustomApiIntegrationUuidGet(
        integrationUuid: string,
    ): CancelablePromise<CustomApiIntegrationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/custom-api/{integration_uuid}',
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
     * Update custom API integration
     * Update an existing custom API integration
     * @param integrationUuid
     * @param requestBody
     * @returns CustomApiIntegrationResponse Successful Response
     * @throws ApiError
     */
    public static updateCustomApiIntegrationsCustomApiIntegrationUuidPut(
        integrationUuid: string,
        requestBody: CustomApiIntegrationUpdate,
    ): CancelablePromise<CustomApiIntegrationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/integrations/custom-api/{integration_uuid}',
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
