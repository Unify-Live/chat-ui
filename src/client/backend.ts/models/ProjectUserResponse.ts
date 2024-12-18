/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for project user data.
 */
export type ProjectUserResponse = {
    /**
     * User's unique identifier
     */
    user_uuid: string;
    /**
     * User's email address
     */
    email: string;
    /**
     * User's role in the project (admin or user)
     */
    role: string;
    /**
     * When user joined the project
     */
    joined_at: string;
};

