/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for client response data.
 */
export type ClientResponse = {
    /**
     * Client UUID
     */
    uuid: string;
    /**
     * Integration UUID
     */
    integration_uuid: string;
    /**
     * External system ID
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
     * Email
     */
    email?: (string | null);
    /**
     * Phone number
     */
    phone?: (string | null);
    /**
     * Online status
     */
    is_online: boolean;
    /**
     * Last activity timestamp
     */
    last_seen_at?: (string | null);
    /**
     * Creation timestamp
     */
    created_at: string;
    /**
     * Last update timestamp
     */
    updated_at: string;
};

