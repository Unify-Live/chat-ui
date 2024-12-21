/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatResponse } from "./ChatResponse";
export type PaginatedResponse_ChatResponse_ = {
  /**
   * List of items for the current page
   */
  items: Array<ChatResponse>;
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
