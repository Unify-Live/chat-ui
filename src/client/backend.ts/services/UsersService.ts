/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserCreate } from "../models/UserCreate";
import type { UserResponse } from "../models/UserResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class UsersService {
  /**
   * Get all users
   * Retrieves a list of all registered users.
   * @returns UserResponse List of users
   * @throws ApiError
   */
  public static getUsersUsersGet(): CancelablePromise<Array<UserResponse>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users",
      errors: {
        400: `Bad request`,
      },
    });
  }
  /**
   * Create a new user
   * Creates a new user with the provided email and optional mobile number.
   *
   * - Validates email format
   * - Ensures email uniqueness
   * - Generates a unique UUID for the user
   * - Returns the created user data
   * @param requestBody
   * @returns UserResponse User successfully created
   * @throws ApiError
   */
  public static createUserUsersPost(
    requestBody: UserCreate,
  ): CancelablePromise<UserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/users",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad request`,
        422: `Validation Error`,
      },
    });
  }
}
