/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageType } from './MessageType';
/**
 * Schema for creating a new message in the system.
 */
export type MessageCreate = {
    /**
     * UUID of the chat where message should be sent
     */
    chat_uuid: string;
    /**
     * Text content of the message
     */
    content: string;
    /**
     * Type of the message (text or file)
     */
    message_type?: MessageType;
    /**
     * UUID of the message being replied to
     */
    reply_to_uuid?: (string | null);
    /**
     * Message ID in external system (e.g., Telegram message ID)
     */
    external_id?: (string | null);
};

