/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationStatus } from './IntegrationStatus';
import type { IntegrationType } from './IntegrationType';
import type { TelegramIntegrationConfig } from './TelegramIntegrationConfig';
/**
 * Schema for telegram integration response.
 */
export type TelegramIntegrationResponse = {
    /**
     * Integration name
     */
    name: string;
    /**
     * Type of integration
     */
    type: IntegrationType;
    /**
     * Integration unique identifier
     */
    uuid: string;
    /**
     * Project UUID this integration belongs to
     */
    project_uuid: string;
    /**
     * Current integration status
     */
    status: IntegrationStatus;
    /**
     * Integration creation timestamp
     */
    created_at: string;
    /**
     * Last update timestamp
     */
    updated_at: string;
    /**
     * Telegram configuration
     */
    config: TelegramIntegrationConfig;
};

