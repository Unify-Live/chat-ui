/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WidgetIntegrationConfig } from "../models/WidgetIntegrationConfig";
import type { WidgetIntegrationCreate } from "../models/WidgetIntegrationCreate";
import type { WidgetIntegrationResponse } from "../models/WidgetIntegrationResponse";
import type { WidgetIntegrationUpdate } from "../models/WidgetIntegrationUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class IntegrationsWidgetService {
  /**
   * Create widget integration
   * Create a new widget integration for the project
   * @param requestBody
   * @returns WidgetIntegrationResponse Successful Response
   * @throws ApiError
   */
  public static createWidget(
    requestBody: WidgetIntegrationCreate,
  ): CancelablePromise<WidgetIntegrationResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/integrations/widget",
      body: requestBody,
      mediaType: "application/json",
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
  public static getWidget(
    integrationUuid: string,
  ): CancelablePromise<WidgetIntegrationResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/integrations/widget/{integration_uuid}",
      path: {
        integration_uuid: integrationUuid,
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
  public static updateWidget(
    integrationUuid: string,
    requestBody: WidgetIntegrationUpdate,
  ): CancelablePromise<WidgetIntegrationResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/integrations/widget/{integration_uuid}",
      path: {
        integration_uuid: integrationUuid,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad request`,
        403: `Not enough permissions`,
        404: `Integration not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Client config widget integration
   * Client config widget integration
   * @param integrationUuid
   * @returns WidgetIntegrationConfig Successful Response
   * @throws ApiError
   */
  public static getWidgetClientConfig(
    integrationUuid: string,
  ): CancelablePromise<WidgetIntegrationConfig> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/integrations/widget/{integration_uuid}/client-config",
      path: {
        integration_uuid: integrationUuid,
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
