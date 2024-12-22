/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TelegramIntegrationCreate } from "../models/TelegramIntegrationCreate";
import type { TelegramIntegrationResponse } from "../models/TelegramIntegrationResponse";
import type { TelegramIntegrationUpdate } from "../models/TelegramIntegrationUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class IntegrationsTelegramService {
  /**
   * Create telegram integration
   * Create a new telegram integration for the project
   * @param requestBody
   * @returns TelegramIntegrationResponse Successful Response
   * @throws ApiError
   */
  public static createTelegram(
    requestBody: TelegramIntegrationCreate,
  ): CancelablePromise<TelegramIntegrationResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/integrations/telegram",
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
   * Get telegram integration
   * Get details of a specific telegram integration
   * @param integrationUuid
   * @returns TelegramIntegrationResponse Successful Response
   * @throws ApiError
   */
  public static getTelegram(
    integrationUuid: string,
  ): CancelablePromise<TelegramIntegrationResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/integrations/telegram/{integration_uuid}",
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
   * Update telegram integration
   * Update an existing telegram integration
   * @param integrationUuid
   * @param requestBody
   * @returns TelegramIntegrationResponse Successful Response
   * @throws ApiError
   */
  public static updateTelegram(
    integrationUuid: string,
    requestBody: TelegramIntegrationUpdate,
  ): CancelablePromise<TelegramIntegrationResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/integrations/telegram/{integration_uuid}",
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
}
