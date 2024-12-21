/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCreate } from "../models/ChatCreate";
import type { ChatResponse } from "../models/ChatResponse";
import type { ChatStatus } from "../models/ChatStatus";
import type { ChatUpdate } from "../models/ChatUpdate";
import type { ChatWithParticipants } from "../models/ChatWithParticipants";
import type { PaginatedResponse_ChatResponse_ } from "../models/PaginatedResponse_ChatResponse_";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ChatCoreService {
  /**
   * Create new chat
   * Create a new chat for specific integration
   * @param requestBody
   * @returns ChatResponse Successful Response
   * @throws ApiError
   */
  public static createNewChat(
    requestBody: ChatCreate,
  ): CancelablePromise<ChatResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/chat/core",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Chat not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get integration chats
   * Get paginated list of chats for specific integration with optional status filter
   * @param integrationUuid
   * @param status Filter by chat status
   * @param offset Query offset
   * @param limit Items per page
   * @returns PaginatedResponse_ChatResponse_ Successful Response
   * @throws ApiError
   */
  public static getIntegrationChats(
    integrationUuid: string,
    status?: ChatStatus | null,
    offset?: number,
    limit: number = 50,
  ): CancelablePromise<PaginatedResponse_ChatResponse_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/chat/core/integration/{integration_uuid}",
      path: {
        integration_uuid: integrationUuid,
      },
      query: {
        status: status,
        offset: offset,
        limit: limit,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Chat not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get chat details
   * Get detailed chat information including participant list
   * @param chatUuid
   * @returns ChatWithParticipants Successful Response
   * @throws ApiError
   */
  public static getChatDetails(
    chatUuid: string,
  ): CancelablePromise<ChatWithParticipants> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/chat/core/{chat_uuid}",
      path: {
        chat_uuid: chatUuid,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Chat not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update chat
   * Update chat title or status
   * @param chatUuid
   * @param requestBody
   * @returns ChatResponse Successful Response
   * @throws ApiError
   */
  public static updateChatDetails(
    chatUuid: string,
    requestBody: ChatUpdate,
  ): CancelablePromise<ChatResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/chat/core/{chat_uuid}",
      path: {
        chat_uuid: chatUuid,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Chat not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update chat status
   * Update chat status (active/closed/archived)
   * @param chatUuid
   * @param status
   * @returns ChatResponse Successful Response
   * @throws ApiError
   */
  public static updateChatStatus(
    chatUuid: string,
    status: ChatStatus,
  ): CancelablePromise<ChatResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/chat/core/{chat_uuid}/status/{status}",
      path: {
        chat_uuid: chatUuid,
        status: status,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Chat not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get chats by status
   * Get all chats with specific status from all accessible integrations
   * @param status
   * @param offset Query offset
   * @param limit Items per page
   * @returns PaginatedResponse_ChatResponse_ Successful Response
   * @throws ApiError
   */
  public static getChatsByStatus(
    status: ChatStatus,
    offset?: number,
    limit: number = 50,
  ): CancelablePromise<PaginatedResponse_ChatResponse_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/chat/core/status/{status}",
      path: {
        status: status,
      },
      query: {
        offset: offset,
        limit: limit,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Chat not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Archive chat
   * Archive chat and stop new messages
   * @param chatUuid
   * @returns ChatResponse Successful Response
   * @throws ApiError
   */
  public static archiveExistingChat(
    chatUuid: string,
  ): CancelablePromise<ChatResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/chat/core/{chat_uuid}/archive",
      path: {
        chat_uuid: chatUuid,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Chat not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get chat timestamps
   * Get chat's first response and last message timestamps
   * @param chatUuid
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getChatTimestamps(
    chatUuid: string,
  ): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/chat/core/{chat_uuid}/timestamps",
      path: {
        chat_uuid: chatUuid,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Chat not found`,
        422: `Validation Error`,
      },
    });
  }
}
