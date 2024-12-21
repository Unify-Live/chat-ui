/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for telegram integration configuration.
 */
export type TelegramIntegrationConfig = {
    /**
     * Config UUID
     */
    uuid?: (string | null);
    /**
     * Integration UUID
     */
    integration_uuid?: (string | null);
    /**
     * Telegram bot token from BotFather
     */
    bot_token?: (string | null);
    /**
     * Telegram bot username
     */
    bot_username?: (string | null);
    /**
     * Telegram bot title
     */
    bot_title?: (string | null);
    /**
     * Greeting message text
     */
    greeting_message_text?: (string | null);
    /**
     * Ask for phone number
     */
    ask_for_phone_number?: (boolean | null);
};

