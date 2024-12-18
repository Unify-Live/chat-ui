/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetryConfig } from './RetryConfig';
/**
 * Schema for custom API integration configuration.
 */
export type CustomApiIntegrationConfig = {
    /**
     * Endpoint URL for the custom API
     */
    endpoint_url: string;
    /**
     * Retry configuration for failed requests
     */
    retry_config?: (RetryConfig | null);
    /**
     * Request timeout in seconds
     */
    timeout_seconds?: (number | null);
};

