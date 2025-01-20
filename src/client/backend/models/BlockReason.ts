/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for client blocking reason.
 */
export type BlockReason = {
  /**
   * Reason for blocking
   */
  reason: string;
  /**
   * UUID of user who blocked the client
   */
  blocked_by_uuid: string;
  /**
   * When block expires (optional)
   */
  expires_at?: string | null;
};
