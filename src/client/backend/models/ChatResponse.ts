/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatStatus } from "./ChatStatus";
/**
 * Schema for chat response data.
 */
export type ChatResponse = {
  /**
   * Chat UUID
   */
  uuid: string;
  /**
   * Integration UUID this chat belongs to
   */
  integration_uuid: string;
  /**
   * Chat title
   */
  title?: string | null;
  /**
   * Chat description
   */
  description?: string | null;
  /**
   * Current chat status
   */
  status: ChatStatus;
  /**
   * When first response was sent
   */
  first_response_at?: string | null;
  /**
   * When last message was sent
   */
  last_message_at?: string | null;
  /**
   * When chat was created
   */
  created_at: string;
  /**
   * When chat was last updated
   */
  updated_at: string;
};
