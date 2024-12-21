/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageAttachment } from "./MessageAttachment";
import type { MessageStatus } from "./MessageStatus";
import type { MessageType } from "./MessageType";
/**
 * Schema for message response data.
 */
export type MessageResponse = {
  /**
   * Unique identifier of the message
   */
  uuid: string;
  /**
   * UUID of the chat this message belongs to
   */
  chat_uuid: string;
  /**
   * UUID of the message sender
   */
  participant_uuid: string;
  /**
   * Text content of the message
   */
  content: string;
  /**
   * Type of the message
   */
  message_type: MessageType;
  /**
   * Current delivery status of the message
   */
  status: MessageStatus;
  /**
   * UUID of the message this is a reply to
   */
  reply_to_uuid?: string | null;
  /**
   * Message ID in external system
   */
  external_id?: string | null;
  /**
   * List of files attached to this message
   */
  attachments?: Array<MessageAttachment>;
  /**
   * Timestamp when message was created
   */
  created_at: string;
  /**
   * Timestamp when message was last updated
   */
  updated_at: string;
};
