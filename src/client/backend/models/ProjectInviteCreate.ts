/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for creating a new project invite.
 */
export type ProjectInviteCreate = {
  /**
   * Email of the user to invite
   */
  email: string;
  /**
   * Number of hours until invite expires
   */
  expires_in_hours?: number;
};
