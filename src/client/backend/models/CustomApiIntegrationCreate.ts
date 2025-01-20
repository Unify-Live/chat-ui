/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomApiIntegrationConfig } from "./CustomApiIntegrationConfig";
/**
 * Schema for creating a new custom API integration.
 */
export type CustomApiIntegrationCreate = {
  /**
   * Integration name
   */
  name: string;
  /**
   * Must be 'custom_api'
   */
  type?: string;
  /**
   * Project UUID this integration belongs to
   */
  project_uuid: string;
  /**
   * Custom API configuration
   */
  config: CustomApiIntegrationConfig;
};
