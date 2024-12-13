/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiKeysRequest } from "../models/ApiKeysRequest";
import type { ApiKeysResponse } from "../models/ApiKeysResponse";
import type { CodeRequest } from "../models/CodeRequest";
import type { ExchangeApiKeysRequest } from "../models/ExchangeApiKeysRequest";
import type { TokenResponse } from "../models/TokenResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class AuthService {
  /**
   * Exchange Code For Token
   * Exchange frontend authorization code for an access and refresh tokens
   * @param requestBody
   * @returns TokenResponse Successful Response
   * @throws ApiError
   */
  public static exchangeCodeForToken(
    requestBody: CodeRequest,
  ): CancelablePromise<TokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/exchange-code-for-token/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Api Credentials
   * Create API credentials for a user
   * @param requestBody
   * @returns ApiKeysResponse Successful Response
   * @throws ApiError
   */
  public static createApiCredentials(
    requestBody: ApiKeysRequest,
  ): CancelablePromise<ApiKeysResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/create-api-credentials/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Api Credentials
   * Exchange API credentials for an access token
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static exchangeApiCredentialsForToken(
    requestBody: ExchangeApiKeysRequest,
  ): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/exchange-api-credentials-for-token/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
