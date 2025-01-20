/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticatedApi } from "../models/AuthenticatedApi";
import type { AuthenticatedUser } from "../models/AuthenticatedUser";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class SystemService {
  /**
   * Check Status
   * Check system and database health status
   * @returns any Successful Response
   * @throws ApiError
   */
  public static status(): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/status",
    });
  }
  /**
   * Get Me User
   * Get current user information
   * @returns AuthenticatedUser Successful Response
   * @throws ApiError
   */
  public static getMeUser(): CancelablePromise<AuthenticatedUser> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/me/user",
    });
  }
  /**
   * Get Me Api
   * Get current API client information
   * @returns AuthenticatedApi Successful Response
   * @throws ApiError
   */
  public static getMeApi(): CancelablePromise<AuthenticatedApi> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/me/api",
    });
  }
}
