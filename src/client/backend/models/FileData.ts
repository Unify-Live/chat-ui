/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FileData = {
    /**
     * File UUID
     */
    uuid: string;
    /**
     * Integration UUID. Can be null if file is not related to any integration (e.g. user profile picture)
     */
    integration_uuid: (string | null);
    /**
     * Original file name
     */
    file_name: string;
    /**
     * Type of file (image, document, etc)
     */
    file_type: string;
    /**
     * File size in bytes
     */
    size: number;
    /**
     * User UUID which uploaded the file
     */
    user_uuid?: (string | null);
    /**
     * Client UUID which uploaded the file
     */
    client_uuid?: (string | null);
    /**
     * S3 bucket name
     */
    file_bucket_name: string;
};

