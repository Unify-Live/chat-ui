/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for client presence status.
 */
export type ClientPresence = {
    /**
     * Whether client is currently online
     */
    is_online: boolean;
    /**
     * When client was last active
     */
    last_seen_at?: (string | null);
    /**
     * Current active chat UUID
     */
    current_chat_uuid?: (string | null);
};

