/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_widget_upload_file } from '../models/Body_widget_upload_file';
import type { FileData } from '../models/FileData';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesWidgetService {
    /**
     * Widget Upload File
     * @param integrationUuid
     * @param clientUuid
     * @param formData
     * @returns FileData Successful Response
     * @throws ApiError
     */
    public static widgetUploadFile(
        integrationUuid: string,
        clientUuid: string,
        formData: Body_widget_upload_file,
    ): CancelablePromise<FileData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/widget/upload/{integration_uuid}/{client_uuid}',
            path: {
                'integration_uuid': integrationUuid,
                'client_uuid': clientUuid,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Widget Get File
     * @param fileUuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public static widgetGetFile(
        fileUuid: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/widget/{file_uuid}',
            path: {
                'file_uuid': fileUuid,
            },
            errors: {
                401: `Authentication required`,
                403: `Insufficient permissions`,
                422: `Validation Error`,
            },
        });
    }
}
