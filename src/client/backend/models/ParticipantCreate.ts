/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParticipantType } from "./ParticipantType";
/**
 * Schema for adding a participant to chat.
 */
export type ParticipantCreate = {
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
};
