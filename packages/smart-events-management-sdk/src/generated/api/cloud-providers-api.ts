/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift SmartEvents Fleet Manager
 * The API exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CloudProviderListResponse } from '../model';
// @ts-ignore
import { CloudRegionListResponse } from '../model';
/**
 * CloudProvidersApi - axios parameter creator
 * @export
 */
export const CloudProvidersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get details of the Cloud Provider specified by id.
         * @summary Get Cloud Provider.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudProviderAPIGetCloudProvider: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('cloudProviderAPIGetCloudProvider', 'id', id)
            const localVarPath = `/api/v1/cloud_providers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the list of supported Regions of the specified Cloud Provider.
         * @summary List Supported Cloud Regions.
         * @param {string} id 
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudProviderAPIListCloudProviderRegions: async (id: string, page?: number, size?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('cloudProviderAPIListCloudProviderRegions', 'id', id)
            const localVarPath = `/api/v1/cloud_providers/{id}/regions`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the list of supported Cloud Providers.
         * @summary List Supported Cloud Providers.
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudProviderAPIListCloudProviders: async (page?: number, size?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/cloud_providers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CloudProvidersApi - functional programming interface
 * @export
 */
export const CloudProvidersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CloudProvidersApiAxiosParamCreator(configuration)
    return {
        /**
         * Get details of the Cloud Provider specified by id.
         * @summary Get Cloud Provider.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudProviderAPIGetCloudProvider(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudProviderListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudProviderAPIGetCloudProvider(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the list of supported Regions of the specified Cloud Provider.
         * @summary List Supported Cloud Regions.
         * @param {string} id 
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudProviderAPIListCloudProviderRegions(id: string, page?: number, size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudRegionListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudProviderAPIListCloudProviderRegions(id, page, size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the list of supported Cloud Providers.
         * @summary List Supported Cloud Providers.
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudProviderAPIListCloudProviders(page?: number, size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudProviderListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudProviderAPIListCloudProviders(page, size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CloudProvidersApi - factory interface
 * @export
 */
export const CloudProvidersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CloudProvidersApiFp(configuration)
    return {
        /**
         * Get details of the Cloud Provider specified by id.
         * @summary Get Cloud Provider.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudProviderAPIGetCloudProvider(id: string, options?: any): AxiosPromise<CloudProviderListResponse> {
            return localVarFp.cloudProviderAPIGetCloudProvider(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of supported Regions of the specified Cloud Provider.
         * @summary List Supported Cloud Regions.
         * @param {string} id 
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudProviderAPIListCloudProviderRegions(id: string, page?: number, size?: number, options?: any): AxiosPromise<CloudRegionListResponse> {
            return localVarFp.cloudProviderAPIListCloudProviderRegions(id, page, size, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of supported Cloud Providers.
         * @summary List Supported Cloud Providers.
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudProviderAPIListCloudProviders(page?: number, size?: number, options?: any): AxiosPromise<CloudProviderListResponse> {
            return localVarFp.cloudProviderAPIListCloudProviders(page, size, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CloudProvidersApi - interface
 * @export
 * @interface CloudProvidersApi
 */
export interface CloudProvidersApiInterface {
    /**
     * Get details of the Cloud Provider specified by id.
     * @summary Get Cloud Provider.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudProvidersApiInterface
     */
    cloudProviderAPIGetCloudProvider(id: string, options?: AxiosRequestConfig): AxiosPromise<CloudProviderListResponse>;

    /**
     * Returns the list of supported Regions of the specified Cloud Provider.
     * @summary List Supported Cloud Regions.
     * @param {string} id 
     * @param {number} [page] 
     * @param {number} [size] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudProvidersApiInterface
     */
    cloudProviderAPIListCloudProviderRegions(id: string, page?: number, size?: number, options?: AxiosRequestConfig): AxiosPromise<CloudRegionListResponse>;

    /**
     * Returns the list of supported Cloud Providers.
     * @summary List Supported Cloud Providers.
     * @param {number} [page] 
     * @param {number} [size] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudProvidersApiInterface
     */
    cloudProviderAPIListCloudProviders(page?: number, size?: number, options?: AxiosRequestConfig): AxiosPromise<CloudProviderListResponse>;

}

/**
 * CloudProvidersApi - object-oriented interface
 * @export
 * @class CloudProvidersApi
 * @extends {BaseAPI}
 */
export class CloudProvidersApi extends BaseAPI implements CloudProvidersApiInterface {
    /**
     * Get details of the Cloud Provider specified by id.
     * @summary Get Cloud Provider.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudProvidersApi
     */
    public cloudProviderAPIGetCloudProvider(id: string, options?: AxiosRequestConfig) {
        return CloudProvidersApiFp(this.configuration).cloudProviderAPIGetCloudProvider(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of supported Regions of the specified Cloud Provider.
     * @summary List Supported Cloud Regions.
     * @param {string} id 
     * @param {number} [page] 
     * @param {number} [size] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudProvidersApi
     */
    public cloudProviderAPIListCloudProviderRegions(id: string, page?: number, size?: number, options?: AxiosRequestConfig) {
        return CloudProvidersApiFp(this.configuration).cloudProviderAPIListCloudProviderRegions(id, page, size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of supported Cloud Providers.
     * @summary List Supported Cloud Providers.
     * @param {number} [page] 
     * @param {number} [size] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudProvidersApi
     */
    public cloudProviderAPIListCloudProviders(page?: number, size?: number, options?: AxiosRequestConfig) {
        return CloudProvidersApiFp(this.configuration).cloudProviderAPIListCloudProviders(page, size, options).then((request) => request(this.axios, this.basePath));
    }
}
