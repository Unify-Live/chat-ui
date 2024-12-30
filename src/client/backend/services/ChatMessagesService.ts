/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentCreate } from "../models/AttachmentCreate";
import type { AttachmentResponse } from "../models/AttachmentResponse";
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
  /**
   * Add attachment
   * Add file attachment to message
   * @param messageUuid
   * @param fileType Type of file
   * @param fileUrl URL to file
   * @param fileName Original filename
   * @returns AttachmentCreate Successful Response
   * @throws ApiError
   */
  public static addMessageAttachment(
    messageUuid: string,
    fileType: string,
    fileUrl: string,
    fileName?: string | null,
  ): CancelablePromise<AttachmentCreate> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/chat/messages/{message_uuid}/attachments",
      path: {
        message_uuid: messageUuid,
      },
      query: {
        file_type: fileType,
        file_url: fileUrl,
        file_name: fileName,
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
   * Get attachments
   * Get all attachments for message
   * @param messageUuid
   * @returns AttachmentResponse Successful Response
   * @throws ApiError
   */
  public static getMessageAttachments(
    messageUuid: string,
  ): CancelablePromise<Array<AttachmentResponse>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/chat/messages/{message_uuid}/attachments",
      path: {
        message_uuid: messageUuid,
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
   * Delete attachment
   * Delete file attachment
   * @param attachmentUuid
   * @returns void
   * @throws ApiError
   */
  public static deleteMessageAttachment(
    attachmentUuid: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/chat/messages/attachments/{attachment_uuid}",
      path: {
        attachment_uuid: attachmentUuid,
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
   * Get chat attachments
   * Get all attachments in chat with pagination
   * @param chatUuid
   * @param fileType Filter by file type
   * @param limit
   * @param offset
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAllChatAttachments(
    chatUuid: string,
    fileType?: string | null,
    limit: number = 50,
    offset?: number,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/chat/messages/chat/{chat_uuid}/attachments",
      path: {
        chat_uuid: chatUuid,
      },
      query: {
        file_type: fileType,
        limit: limit,
        offset: offset,
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
