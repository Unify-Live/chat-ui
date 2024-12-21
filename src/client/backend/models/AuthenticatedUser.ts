/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuthenticatedUser = {
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
  /**
   * Email address
   */
  email: string;
  /**
   * Email verification status
   */
  email_verified: boolean;
  /**
   * Full name
   */
  name: string;
  /**
   * Given name
   */
  given_name: string;
  /**
   * Preferred username
   */
  preferred_username: string;
  /**
   * Nickname
   */
  nickname: string;
  /**
   * User groups
   */
  groups: Array<string>;
};
