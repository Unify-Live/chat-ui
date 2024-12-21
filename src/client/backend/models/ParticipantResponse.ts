/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParticipantType } from "./ParticipantType";
/**
 * Schema for participant response data.
 */
export type ParticipantResponse = {
  /**
   * Participant UUID
   */
  uuid: string;
  /**
   * Chat UUID
   */
  chat_uuid: string;
  /**
   * Type of participant
   */
  participant_type: ParticipantType;
  /**
   * User UUID (for managers)
   */
  user_uuid?: string | null;
  /**
   * Client UUID (for clients)
   */
  client_uuid?: string | null;
  /**
   * When participant joined
   */
  created_at: string;
  /**
   * Client's name (if client)
   */
  client_name?: string | null;
  /**
   * User's email (if manager)
   */
  user_email?: string | null;
};
