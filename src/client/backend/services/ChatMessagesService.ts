/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageCreate } from "../models/MessageCreate";
import type { MessageResponse } from "../models/MessageResponse";
import type { MessageStatus } from "../models/MessageStatus";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ChatMessagesService {
  /**
   * Create message
   * Create a new message in chat
   * @param participantUuid UUID of message sender
   * @param requestBody
   * @returns MessageResponse Successful Response
   * @throws ApiError
   */
  public static createNewMessage(
    participantUuid: string,
    requestBody: MessageCreate,
  ): CancelablePromise<MessageResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/chat/messages",
      query: {
        participant_uuid: participantUuid,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Message not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update status
   * Update message delivery status
   * @param messageUuid
   * @param status
   * @returns MessageResponse Successful Response
   * @throws ApiError
   */
  public static updateMessageStatus(
    messageUuid: string,
    status: MessageStatus,
  ): CancelablePromise<MessageResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/chat/messages/{message_uuid}/status/{status}",
      path: {
        message_uuid: messageUuid,
        status: status,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Message not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get chat messages
   * Retrieve a list of messages from a chat with optional pagination
   * @param chatUuid
   * @param limit Number of messages to return
   * @param beforeMessageUuid Get messages before this message UUID
   * @returns MessageResponse Successful Response
   * @throws ApiError
   */
  public static getMessagesInChat(
    chatUuid: string,
    limit: number = 50,
    beforeMessageUuid?: string | null,
  ): CancelablePromise<Array<MessageResponse>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/chat/messages/chat/{chat_uuid}",
      path: {
        chat_uuid: chatUuid,
      },
      query: {
        limit: limit,
        before_message_uuid: beforeMessageUuid,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Message not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Mark as read
   * Mark all messages in chat as read for participant
   * @param chatUuid
   * @param participantUuid Reader's participant UUID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static markChatAsRead(
    chatUuid: string,
    participantUuid: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/chat/messages/chat/{chat_uuid}/read",
      path: {
        chat_uuid: chatUuid,
      },
      query: {
        participant_uuid: participantUuid,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Message not found`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get unread count
   * Get number of unread messages for participant
   * @param chatUuid
   * @param participantUuid Participant UUID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getUnreadMessagesCount(
    chatUuid: string,
    participantUuid: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/chat/messages/chat/{chat_uuid}/unread",
      path: {
        chat_uuid: chatUuid,
      },
      query: {
        participant_uuid: participantUuid,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        404: `Message not found`,
        422: `Validation Error`,
      },
    });
  }
}
