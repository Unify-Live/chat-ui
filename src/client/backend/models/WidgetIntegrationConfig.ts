/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WidgetTheme } from './WidgetTheme';
/**
 * Schema for widget integration configuration.
 */
export type WidgetIntegrationConfig = {
    /**
     * Widget theme preference
     */
    widget_theme?: (WidgetTheme | null);
    /**
     * List of domains where widget can be embedded
     */
    allowed_domains?: (Array<string> | null);
    /**
     * Welcome message shown when widget opens
     */
    welcome_message?: (string | null);
};

