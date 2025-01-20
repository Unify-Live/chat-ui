/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_integration_upload_file } from "../models/Body_integration_upload_file";
import type { FileData } from "../models/FileData";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class FilesIntegrationService {
  /**
   * Integration Upload File
   * @param clientUuid
   * @param formData
   * @returns FileData Successful Response
   * @throws ApiError
   */
  public static integrationUploadFile(
    clientUuid: string,
    formData: Body_integration_upload_file,
  ): CancelablePromise<FileData> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/files/integration/upload/{client_uuid}",
      path: {
        client_uuid: clientUuid,
      },
      formData: formData,
      mediaType: "multipart/form-data",
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        422: `Validation Error`,
      },
    });
  }
  /**
   * Integration Get File
   * @param fileUuid
   * @returns any Successful Response
   * @throws ApiError
   */
  public static integrationGetFile(fileUuid: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/files/integration/{file_uuid}",
      path: {
        file_uuid: fileUuid,
      },
      errors: {
        401: `Authentication required`,
        403: `Insufficient permissions`,
        422: `Validation Error`,
      },
    });
  }
}
