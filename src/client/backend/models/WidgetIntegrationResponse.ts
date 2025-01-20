/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationStatus } from "./IntegrationStatus";
import type { IntegrationType } from "./IntegrationType";
import type { WidgetIntegrationConfig } from "./WidgetIntegrationConfig";
/**
 * Schema for widget integration response.
 */
export type WidgetIntegrationResponse = {
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
   * Widget configuration
   */
  config: WidgetIntegrationConfig;
};
