/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomApiIntegrationConfig } from "./CustomApiIntegrationConfig";
import type { IntegrationStatus } from "./IntegrationStatus";
/**
 * Schema for updating a custom API integration.
 */
export type CustomApiIntegrationUpdate = {
  /**
   * New integration name
   */
  name?: string | null;
  /**
   * New integration status
   */
  status?: IntegrationStatus | null;
  /**
   * Updated API configuration
   */
  config?: CustomApiIntegrationConfig | null;
};
