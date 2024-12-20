/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlockReason } from '../models/BlockReason';
import type { BlockStatus } from '../models/BlockStatus';
import type { ClientCreate } from '../models/ClientCreate';
import type { ClientPresence } from '../models/ClientPresence';
import type { ClientResponse } from '../models/ClientResponse';
import type { PaginatedResponse_ClientResponse_ } from '../models/PaginatedResponse_ClientResponse_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatClientsService {
    /**
     * Create new client
     * Create a new client for a specific integration
     * @param requestBody
     * @returns ClientResponse Successful Response
     * @throws ApiError
     */
    public static createNewClient(
        requestBody: ClientCreate,
    ): CancelablePromise<ClientResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/clients',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                404: `Client not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get integration clients
     * Get paginated list of clients for specific integration
     * @param integrationUuid
     * @param search Search term
     * @param includeBlocked Include blocked clients
     * @param offset Query offset
     * @param limit Items per page
     * @returns PaginatedResponse_ClientResponse_ Successful Response
     * @throws ApiError
     */
    public static getIntegrationClients(
        integrationUuid: string,
        search?: (string | null),
        includeBlocked: boolean = false,
        offset?: number,
        limit: number = 50,
    ): CancelablePromise<PaginatedResponse_ClientResponse_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/clients/integration/{integration_uuid}',
            path: {
                'integration_uuid': integrationUuid,
            },
            query: {
                'search': search,
                'include_blocked': includeBlocked,
                'offset': offset,
                'limit': limit,
            },
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                404: `Client not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get online clients
     * Get list of currently online clients for integration
     * @param integrationUuid
     * @returns ClientPresence Successful Response
     * @throws ApiError
     */
    public static getOnlineClients(
        integrationUuid: string,
    ): CancelablePromise<Array<ClientPresence>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/clients/online/{integration_uuid}',
            path: {
                'integration_uuid': integrationUuid,
            },
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                404: `Client not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update presence
     * Update client's online status and current activity
     * @param clientUuid
     * @param isOnline Online status
     * @param currentChatUuid Current active chat UUID
     * @param activity Current activity description
     * @returns ClientPresence Successful Response
     * @throws ApiError
     */
    public static updateClientPresence(
        clientUuid: string,
        isOnline: boolean,
        currentChatUuid?: (string | null),
        activity?: (string | null),
    ): CancelablePromise<ClientPresence> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/clients/{client_uuid}/presence',
            path: {
                'client_uuid': clientUuid,
            },
            query: {
                'is_online': isOnline,
                'current_chat_uuid': currentChatUuid,
                'activity': activity,
            },
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                404: `Client not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Block client
     * Block client with reason and optional expiration
     * @param clientUuid
     * @param requestBody
     * @returns BlockStatus Successful Response
     * @throws ApiError
     */
    public static blockExistingClient(
        clientUuid: string,
        requestBody: BlockReason,
    ): CancelablePromise<BlockStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/clients/{client_uuid}/block',
            path: {
                'client_uuid': clientUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                404: `Client not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Unblock client
     * Remove block from client
     * @param clientUuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public static unblockExistingClient(
        clientUuid: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/clients/{client_uuid}/unblock',
            path: {
                'client_uuid': clientUuid,
            },
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                404: `Client not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get activity history
     * Get client's activity history
     * @param clientUuid
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getClientActivities(
        clientUuid: string,
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/clients/{client_uuid}/activity',
            path: {
                'client_uuid': clientUuid,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                404: `Client not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get blocked clients
     * Get list of all blocked clients for integration
     * @param integrationUuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getIntegrationBlockedClients(
        integrationUuid: string,
    ): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/clients/blocked/{integration_uuid}',
            path: {
                'integration_uuid': integrationUuid,
            },
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                404: `Client not found`,
                422: `Validation Error`,
            },
        });
    }
}
