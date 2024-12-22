/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiKeys } from "../models/ApiKeys";
import type { ApiKeysRequest } from "../models/ApiKeysRequest";
import type { CodeRequest } from "../models/CodeRequest";
import type { TokenResponse } from "../models/TokenResponse";
import type { TokenResponseWithoutRefresh } from "../models/TokenResponseWithoutRefresh";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class AuthenticationService {
  /**
   * Exchange Code For Token
   * Exchange frontend authorization code for access and refresh tokens
   * @param requestBody
   * @returns TokenResponse Successful Response
   * @throws ApiError
   */
  public static exchangeCodeForToken(
    requestBody: CodeRequest,
  ): CancelablePromise<TokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/token/exchange",
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
   * @returns ApiKeys Successful Response
   * @throws ApiError
   */
  public static createApiCredentials(
    requestBody: ApiKeysRequest,
  ): CancelablePromise<ApiKeys> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/api-credentials",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Exchange Api Credentials For Token
   * Exchange API credentials (client_id and client_secret) for JWT access token
   * @param requestBody
   * @returns TokenResponseWithoutRefresh Successful Response
   * @throws ApiError
   */
  public static exchangeApiCredentialsForToken(
    requestBody: ApiKeys,
  ): CancelablePromise<TokenResponseWithoutRefresh> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/token/api-exchange",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid credentials or exchange failed`,
        422: `Validation Error`,
      },
    });
  }
}
