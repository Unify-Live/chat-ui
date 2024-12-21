/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for project invite response data.
 */
export type ProjectInviteResponse = {
  /**
   * Unique identifier of the invite
   */
  uuid: string;
  /**
   * Project UUID
   */
  project_uuid: string;
  /**
   * Invited user's email
   */
  email: string;
  /**
   * Current invite status
   */
  status: string;
  /**
   * When invite expires
   */
  expires_at: string;
  /**
   * When invite was created
   */
  created_at: string;
};
