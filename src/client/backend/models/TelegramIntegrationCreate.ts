/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TelegramIntegrationCreate = {
    /**
     * Integration name
     */
    name: string;
    /**
     * Must be 'telegram'
     */
    type?: string;
    /**
     * Project UUID this integration belongs to
     */
    project_uuid: string;
    /**
     * Telegram bot token from BotFather
     */
    bot_token: string;
    /**
     * Ask for phone number
     */
    ask_for_phone_number: boolean;
    /**
     * Greeting message text
     */
    greetings_message_text: string;
};

