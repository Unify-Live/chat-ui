/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TokenResponseWithoutRefresh = {
  /**
   * The token used to authenticate and authorize API requests. Typically a JWT or opaque string.
   */
  access_token: string;
  /**
   * Specifies the type of token issued. Commonly 'Bearer', indicating how the access_token should be included in requests.
   */
  token_type: string;
  /**
   * The duration in seconds for which the access token is valid. After expiration, a new token must be obtained.
   */
  expires_in: number;
  /**
   * A JWT that contains identity claims about the authenticated user. Used in OpenID Connect scenarios.
   */
  id_token: string;
};
