/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedResponse_UserResponse_ } from "../models/PaginatedResponse_UserResponse_";
import type { UserResponse } from "../models/UserResponse";
import type { UserUpdate } from "../models/UserUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class UsersService {
  /**
   * Get current user profile
   * Returns detailed information about the currently authenticated user
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  public static getCurrentUserProfile(): CancelablePromise<UserResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users/me",
    });
  }
  /**
   * Update current user profile
   * Update profile information for the currently authenticated user
   * @param requestBody
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  public static updateCurrentUserProfile(
    requestBody: UserUpdate,
  ): CancelablePromise<UserResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/users/me",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Search users
   * Search users by email or mobile number. Useful for finding users to invite to projects.
   * @param page
   * @param size
   * @param search
   * @param sortBy
   * @param sortOrder
   * @returns PaginatedResponse_UserResponse_ Successful Response
   * @throws ApiError
   */
  public static searchUsers(
    page: number = 1,
    size: number = 10,
    search?: string | null,
    sortBy?: string | null,
    sortOrder?: string | null,
  ): CancelablePromise<PaginatedResponse_UserResponse_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users/search",
      query: {
        page: page,
        size: size,
        search: search,
        sort_by: sortBy,
        sort_order: sortOrder,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
