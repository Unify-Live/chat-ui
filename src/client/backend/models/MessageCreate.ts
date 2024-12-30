/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageType } from "./MessageType";
/**
 * Schema for creating a new message.
 */
export type MessageCreate = {
  /**
   * Chat UUID
   */
  chat_uuid: string;
  /**
   * Message content
   */
  content: string;
  /**
   * Type of message
   */
  message_type?: MessageType;
  /**
   * External system message ID
   */
  external_id?: string | null;
  /**
   * UUID of message being replied to
   */
  reply_to_uuid?: string | null;
};
