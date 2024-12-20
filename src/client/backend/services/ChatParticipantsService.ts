/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParticipantCreate } from '../models/ParticipantCreate';
import type { ParticipantResponse } from '../models/ParticipantResponse';
import type { ParticipantType } from '../models/ParticipantType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatParticipantsService {
    /**
     * Add participant
     * Add new participant (client or manager) to chat
     * @param requestBody
     * @returns ParticipantResponse Successful Response
     * @throws ApiError
     */
    public static addChatParticipant(
        requestBody: ParticipantCreate,
    ): CancelablePromise<ParticipantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/participant',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Not authenticated`,
                403: `Not enough permissions`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove participant
     * Remove participant from chat
     * @param chatUuid
     * @param participantUuid
     * @returns void
     * @throws ApiError
     */
    public static removeChatParticipant(
        chatUuid: string,
        participantUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/chat/participant/chat/{chat_uuid}/participant/{participant_uuid}',
            path: {
                'chat_uuid': chatUuid,
                'participant_uuid': participantUuid,
            },
            errors: {
                401: `Not authenticated`,
                403: `Not enough permissions`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get participant
     * Get all participant in chat with optional type filter
     * @param chatUuid
     * @param participantType Filter by participant type
     * @returns ParticipantResponse Successful Response
     * @throws ApiError
     */
    public static getAllParticipants(
        chatUuid: string,
        participantType?: (ParticipantType | null),
    ): CancelablePromise<Array<ParticipantResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/participant/chat/{chat_uuid}',
            path: {
                'chat_uuid': chatUuid,
            },
            query: {
                'participant_type': participantType,
            },
            errors: {
                401: `Not authenticated`,
                403: `Not enough permissions`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get participant
     * Get detailed participant information
     * @param participantUuid
     * @returns ParticipantResponse Successful Response
     * @throws ApiError
     */
    public static getParticipantInfo(
        participantUuid: string,
    ): CancelablePromise<ParticipantResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/participant/{participant_uuid}',
            path: {
                'participant_uuid': participantUuid,
            },
            errors: {
                401: `Not authenticated`,
                403: `Not enough permissions`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Transfer chat
     * Transfer chat from one manager to another
     * @param chatUuid
     * @param fromUserUuid Current manager UUID
     * @param toUserUuid New manager UUID
     * @returns ParticipantResponse Successful Response
     * @throws ApiError
     */
    public static transferChatManager(
        chatUuid: string,
        fromUserUuid: string,
        toUserUuid: string,
    ): CancelablePromise<ParticipantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/participant/chat/{chat_uuid}/transfer',
            path: {
                'chat_uuid': chatUuid,
            },
            query: {
                'from_user_uuid': fromUserUuid,
                'to_user_uuid': toUserUuid,
            },
            errors: {
                401: `Not authenticated`,
                403: `Not enough permissions`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get manager chats
     * Get all active chats for manager
     * @param userUuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getManagerChats(
        userUuid: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/participant/manager/{user_uuid}/chats',
            path: {
                'user_uuid': userUuid,
            },
            errors: {
                401: `Not authenticated`,
                403: `Not enough permissions`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get participant stats
     * Get participant statistics for chat
     * @param chatUuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getChatParticipantStats(
        chatUuid: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/participant/chat/{chat_uuid}/stats',
            path: {
                'chat_uuid': chatUuid,
            },
            errors: {
                401: `Not authenticated`,
                403: `Not enough permissions`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get client chats
     * Get all chats where client is participant
     * @param clientUuid
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getClientChats(
        clientUuid: string,
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/participant/client/{client_uuid}/chats',
            path: {
                'client_uuid': clientUuid,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Not authenticated`,
                403: `Not enough permissions`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }
}
