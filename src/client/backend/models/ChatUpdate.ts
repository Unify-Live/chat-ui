/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatStatus } from './ChatStatus';
/**
 * Schema for updating chat settings.
 */
export type ChatUpdate = {
    /**
     * New chat title
     */
    title?: (string | null);
    /**
     * New chat description
     */
    description?: (string | null);
    /**
     * New chat status
     */
    status?: (ChatStatus | null);
};

