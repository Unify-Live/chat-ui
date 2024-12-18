/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TelegramIntegrationConfig } from './TelegramIntegrationConfig';
/**
 * Schema for creating a new telegram integration.
 */
export type TelegramIntegrationCreate = {
    /**
     * Integration name
     */
    name: string;
    /**
     * Must be 'telegram'
     */
    type?: string;
    /**
     * Project UUID this integration belongs to
     */
    project_uuid: string;
    /**
     * Telegram bot configuration
     */
    config: TelegramIntegrationConfig;
};

