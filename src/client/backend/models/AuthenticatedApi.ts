/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuthenticatedApi = {
    /**
     * Subject identifier
     */
    sub: string;
    /**
     * Issuer
     */
    iss: string;
    /**
     * Audience
     */
    aud: string;
    /**
     * Expiration time
     */
    exp: number;
    /**
     * Issued at
     */
    iat: number;
    /**
     * User ID
     */
    uid: string;
    /**
     * Authorized party
     */
    azp: string;
    /**
     * Authentication time
     */
    auth_time: number;
    /**
     * Authentication context class reference
     */
    acr: string;
};

