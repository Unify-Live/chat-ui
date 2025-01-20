/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for client block status.
 */
export type BlockStatus = {
  /**
   * Whether client is currently blocked
   */
  is_blocked: boolean;
  /**
   * Current block reason
   */
  reason?: string | null;
  /**
   * When client was blocked
   */
  blocked_at?: string | null;
  /**
   * When block expires
   */
  expires_at?: string | null;
};
