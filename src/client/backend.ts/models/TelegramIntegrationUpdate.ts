/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationStatus } from './IntegrationStatus';
import type { TelegramIntegrationConfig } from './TelegramIntegrationConfig';
/**
 * Schema for updating a telegram integration.
 */
export type TelegramIntegrationUpdate = {
    /**
     * New integration name
     */
    name?: (string | null);
    /**
     * New integration status
     */
    status?: (IntegrationStatus | null);
    /**
     * Updated telegram configuration
     */
    config?: (TelegramIntegrationConfig | null);
};

