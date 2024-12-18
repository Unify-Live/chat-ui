/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for telegram integration configuration.
 */
export type TelegramIntegrationConfig = {
    /**
     * Telegram bot token from BotFather
     */
    bot_token?: (string | null);
    /**
     * Webhook URL for receiving updates
     */
    webhook_url?: (string | null);
    /**
     * Telegram channel or group ID
     */
    channel_id?: (string | null);
    /**
     * Telegram bot username
     */
    bot_username?: (string | null);
};

