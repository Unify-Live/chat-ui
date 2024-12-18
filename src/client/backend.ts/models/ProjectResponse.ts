/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for project response data.
 */
export type ProjectResponse = {
    /**
     * Unique identifier of the project
     */
    uuid: string;
    /**
     * Name of the project
     */
    name: string;
    /**
     * Project description
     */
    description?: (string | null);
    /**
     * Project creation timestamp
     */
    created_at: string;
};

