/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Basic schema for creating a message attachment.
 */
export type AttachmentCreate = {
  /**
   * Message UUID
   */
  message_uuid: string;
  /**
   * File URL
   */
  file_url: string;
  /**
   * Original file name
   */
  file_name: string;
  /**
   * Type of file (image, document, etc)
   */
  file_type: string;
};
