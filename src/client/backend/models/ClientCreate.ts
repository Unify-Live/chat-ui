/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for creating a new client.
 */
export type ClientCreate = {
    /**
     * Integration UUID
     */
    integration_uuid: string;
    /**
     * Client ID in external system
     */
    external_id: string;
    /**
     * First name
     */
    first_name?: (string | null);
    /**
     * Last name
     */
    last_name?: (string | null);
    /**
     * Email address
     */
    email?: (string | null);
    /**
     * Phone number
     */
    phone?: (string | null);
};

