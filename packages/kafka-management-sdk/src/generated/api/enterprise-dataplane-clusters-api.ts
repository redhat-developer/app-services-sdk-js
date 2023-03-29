/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Management API
 * Kafka Management API is a REST API to manage Kafka instances
 *
 * The version of the OpenAPI document: 1.16.0
 * Contact: rhosak-support@redhat.com
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
import { EnterpriseCluster } from '../model';
// @ts-ignore
import { EnterpriseClusterAddonParameters } from '../model';
// @ts-ignore
import { EnterpriseClusterList } from '../model';
// @ts-ignore
import { EnterpriseClusterRegistrationResponse } from '../model';
// @ts-ignore
import { EnterpriseOsdClusterPayload } from '../model';
/**
 * EnterpriseDataplaneClustersApi - axios parameter creator
 * @export
 */
export const EnterpriseDataplaneClustersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEnterpriseClusterById: async (async: boolean, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'async' is not null or undefined
            assertParamExists('deleteEnterpriseClusterById', 'async', async)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteEnterpriseClusterById', 'id', id)
            const localVarPath = `/api/kafkas_mgmt/v1/clusters/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (async !== undefined) {
                localVarQueryParameter['async'] = async;
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
         * Returns the addon parameters belonging to the enterprise dataplane cluster {id}
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnterpriseClusterAddonParameters: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getEnterpriseClusterAddonParameters', 'id', id)
            const localVarPath = `/api/kafkas_mgmt/v1/clusters/{id}/addon_parameters`
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

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns enterprise data plane cluster by ID
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnterpriseClusterById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getEnterpriseClusterById', 'id', id)
            const localVarPath = `/api/kafkas_mgmt/v1/clusters/{id}`
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

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all Enterprise data plane clusters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnterpriseOsdClusters: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/kafkas_mgmt/v1/clusters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Register enterprise data plane cluster
         * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerEnterpriseOsdCluster: async (enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'enterpriseOsdClusterPayload' is not null or undefined
            assertParamExists('registerEnterpriseOsdCluster', 'enterpriseOsdClusterPayload', enterpriseOsdClusterPayload)
            const localVarPath = `/api/kafkas_mgmt/v1/clusters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(enterpriseOsdClusterPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EnterpriseDataplaneClustersApi - functional programming interface
 * @export
 */
export const EnterpriseDataplaneClustersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EnterpriseDataplaneClustersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEnterpriseClusterById(async: boolean, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEnterpriseClusterById(async, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the addon parameters belonging to the enterprise dataplane cluster {id}
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEnterpriseClusterAddonParameters(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnterpriseClusterAddonParameters>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnterpriseClusterAddonParameters(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns enterprise data plane cluster by ID
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEnterpriseClusterById(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnterpriseCluster>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnterpriseClusterById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all Enterprise data plane clusters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEnterpriseOsdClusters(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnterpriseClusterList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnterpriseOsdClusters(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Register enterprise data plane cluster
         * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerEnterpriseOsdCluster(enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnterpriseClusterRegistrationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerEnterpriseOsdCluster(enterpriseOsdClusterPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EnterpriseDataplaneClustersApi - factory interface
 * @export
 */
export const EnterpriseDataplaneClustersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EnterpriseDataplaneClustersApiFp(configuration)
    return {
        /**
         * 
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEnterpriseClusterById(async: boolean, id: string, options?: any): AxiosPromise<Error> {
            return localVarFp.deleteEnterpriseClusterById(async, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the addon parameters belonging to the enterprise dataplane cluster {id}
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnterpriseClusterAddonParameters(id: string, options?: any): AxiosPromise<EnterpriseClusterAddonParameters> {
            return localVarFp.getEnterpriseClusterAddonParameters(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns enterprise data plane cluster by ID
         * @param {string} id ID of the enterprise data plane cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnterpriseClusterById(id: string, options?: any): AxiosPromise<EnterpriseCluster> {
            return localVarFp.getEnterpriseClusterById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * List all Enterprise data plane clusters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnterpriseOsdClusters(options?: any): AxiosPromise<EnterpriseClusterList> {
            return localVarFp.getEnterpriseOsdClusters(options).then((request) => request(axios, basePath));
        },
        /**
         * Register enterprise data plane cluster
         * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerEnterpriseOsdCluster(enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options?: any): AxiosPromise<EnterpriseClusterRegistrationResponse> {
            return localVarFp.registerEnterpriseOsdCluster(enterpriseOsdClusterPayload, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EnterpriseDataplaneClustersApi - interface
 * @export
 * @interface EnterpriseDataplaneClustersApi
 */
export interface EnterpriseDataplaneClustersApiInterface {
    /**
     * 
     * @param {boolean} async Perform the action in an asynchronous manner
     * @param {string} id ID of the enterprise data plane cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApiInterface
     */
    deleteEnterpriseClusterById(async: boolean, id: string, options?: AxiosRequestConfig): AxiosPromise<Error>;

    /**
     * Returns the addon parameters belonging to the enterprise dataplane cluster {id}
     * @param {string} id ID of the enterprise data plane cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApiInterface
     */
    getEnterpriseClusterAddonParameters(id: string, options?: AxiosRequestConfig): AxiosPromise<EnterpriseClusterAddonParameters>;

    /**
     * Returns enterprise data plane cluster by ID
     * @param {string} id ID of the enterprise data plane cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApiInterface
     */
    getEnterpriseClusterById(id: string, options?: AxiosRequestConfig): AxiosPromise<EnterpriseCluster>;

    /**
     * List all Enterprise data plane clusters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApiInterface
     */
    getEnterpriseOsdClusters(options?: AxiosRequestConfig): AxiosPromise<EnterpriseClusterList>;

    /**
     * Register enterprise data plane cluster
     * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApiInterface
     */
    registerEnterpriseOsdCluster(enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options?: AxiosRequestConfig): AxiosPromise<EnterpriseClusterRegistrationResponse>;

}

/**
 * EnterpriseDataplaneClustersApi - object-oriented interface
 * @export
 * @class EnterpriseDataplaneClustersApi
 * @extends {BaseAPI}
 */
export class EnterpriseDataplaneClustersApi extends BaseAPI implements EnterpriseDataplaneClustersApiInterface {
    /**
     * 
     * @param {boolean} async Perform the action in an asynchronous manner
     * @param {string} id ID of the enterprise data plane cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApi
     */
    public deleteEnterpriseClusterById(async: boolean, id: string, options?: AxiosRequestConfig) {
        return EnterpriseDataplaneClustersApiFp(this.configuration).deleteEnterpriseClusterById(async, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the addon parameters belonging to the enterprise dataplane cluster {id}
     * @param {string} id ID of the enterprise data plane cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApi
     */
    public getEnterpriseClusterAddonParameters(id: string, options?: AxiosRequestConfig) {
        return EnterpriseDataplaneClustersApiFp(this.configuration).getEnterpriseClusterAddonParameters(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns enterprise data plane cluster by ID
     * @param {string} id ID of the enterprise data plane cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApi
     */
    public getEnterpriseClusterById(id: string, options?: AxiosRequestConfig) {
        return EnterpriseDataplaneClustersApiFp(this.configuration).getEnterpriseClusterById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all Enterprise data plane clusters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApi
     */
    public getEnterpriseOsdClusters(options?: AxiosRequestConfig) {
        return EnterpriseDataplaneClustersApiFp(this.configuration).getEnterpriseOsdClusters(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Register enterprise data plane cluster
     * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApi
     */
    public registerEnterpriseOsdCluster(enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options?: AxiosRequestConfig) {
        return EnterpriseDataplaneClustersApiFp(this.configuration).registerEnterpriseOsdCluster(enterpriseOsdClusterPayload, options).then((request) => request(this.axios, this.basePath));
    }
}
