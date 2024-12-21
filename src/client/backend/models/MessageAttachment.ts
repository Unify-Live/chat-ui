/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for file attachments in messages.
 */
export type MessageAttachment = {
  /**
   * Unique identifier of the attachment
   */
  uuid: string;
  /**
   * Type of the attached file (e.g., image, document, video)
   */
  file_type: string;
  /**
   * URL where the file can be accessed
   */
  file_url: string;
  /**
   * Original name of the uploaded file
   */
  file_name?: string | null;
};
