/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for creating a new chat.
 */
export type ChatCreate = {
  /**
   * Integration UUID
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
};
