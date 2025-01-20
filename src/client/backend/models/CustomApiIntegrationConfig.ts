/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for custom API integration configuration.
 */
export type CustomApiIntegrationConfig = {
  /**
   * Endpoint URL for the custom API
   */
  endpoint_url: string;
  /**
   * Maximum number of retry attempts
   */
  max_retries?: number;
  /**
   * Interval between retries in seconds
   */
  retry_interval?: number;
  /**
   * Request timeout in seconds
   */
  timeout_seconds?: number;
};
