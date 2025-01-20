/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WidgetIntegrationConfig } from "./WidgetIntegrationConfig";
/**
 * Schema for creating a new widget integration.
 */
export type WidgetIntegrationCreate = {
  /**
   * Integration name
   */
  name: string;
  /**
   * Must be 'widget'
   */
  type?: string;
  /**
   * Project UUID this integration belongs to
   */
  project_uuid: string;
  /**
   * Widget configuration
   */
  config: WidgetIntegrationConfig;
};
