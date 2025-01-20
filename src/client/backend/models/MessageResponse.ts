/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileData } from "./FileData";
import type { MessageStatus } from "./MessageStatus";
/**
 * Schema for message response data.
 */
export type MessageResponse = {
  /**
   * Message UUID
   */
  uuid: string;
  /**
   * Chat UUID
   */
  chat_uuid: string;
  /**
   * Sender participant UUID
   */
  participant_uuid: string;
  /**
   * Message content
   */
  content: string;
  /**
   * Message status
   */
  status: MessageStatus;
  /**
   * External system ID
   */
  external_id?: string | null;
  /**
   * Replied message UUID
   */
  reply_to_uuid?: string | null;
  /**
   * Creation timestamp
   */
  created_at: string;
  /**
   * Last update timestamp
   */
  updated_at: string;
  /**
   * List of message attachments
   */
  attachments?: Array<FileData>;
  /**
   * Name of message sender
   */
  sender_name?: string | null;
  /**
   * Content of replied message
   */
  reply_to_content?: string | null;
};
