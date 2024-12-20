/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientResponse } from './ClientResponse';
export type PaginatedResponse_ClientResponse_ = {
    /**
     * List of items for the current page
     */
    items: Array<ClientResponse>;
    /**
     * Total number of items
     */
    total: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Items per page
     */
    size: number;
    /**
     * Total number of pages
     */
    pages: number;
    /**
     * Whether there is a next page
     */
    has_next: boolean;
    /**
     * Whether there is a previous page
     */
    has_prev: boolean;
};

