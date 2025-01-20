/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationStatus } from './IntegrationStatus';
import type { WidgetIntegrationConfig } from './WidgetIntegrationConfig';
/**
 * Schema for updating a widget integration.
 */
export type WidgetIntegrationUpdate = {
    /**
     * New integration name
     */
    name?: (string | null);
    /**
     * New integration status
     */
    status?: (IntegrationStatus | null);
    /**
     * Updated widget configuration
     */
    config?: (WidgetIntegrationConfig | null);
};

