/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_upload_file } from "../models/Body_upload_file";
import type { FileData } from "../models/FileData";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class FilesCoreService {
  /**
   * Upload File
   * @param integrationUuid
   * @param formData
   * @returns FileData Successful Response
   * @throws ApiError
   */
  public static uploadFile(
    integrationUuid: string,
    formData: Body_upload_file,
  ): CancelablePromise<FileData> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/files/core/upload/{integration_uuid}",
      path: {
        integration_uuid: integrationUuid,
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
   * Get File
   * @param fileUuid
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getFile(fileUuid: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/files/core/{file_uuid}",
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
