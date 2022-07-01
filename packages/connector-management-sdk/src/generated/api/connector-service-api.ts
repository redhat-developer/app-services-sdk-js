/* tslint:disable */
/* eslint-disable */
/**
 * Connector Management API
 * Connector Management API is a REST API to manage connectors.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
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
import { VersionMetadata } from '../model';
/**
 * ConnectorServiceApi - axios parameter creator
 * @export
 */
export const ConnectorServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the version metadata
         * @summary Returns the version metadata
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionMetadata: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/connector_mgmt/v1`;
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
    }
};

/**
 * ConnectorServiceApi - functional programming interface
 * @export
 */
export const ConnectorServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConnectorServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the version metadata
         * @summary Returns the version metadata
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionMetadata(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VersionMetadata>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionMetadata(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConnectorServiceApi - factory interface
 * @export
 */
export const ConnectorServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConnectorServiceApiFp(configuration)
    return {
        /**
         * Returns the version metadata
         * @summary Returns the version metadata
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionMetadata(options?: any): AxiosPromise<VersionMetadata> {
            return localVarFp.getVersionMetadata(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConnectorServiceApi - interface
 * @export
 * @interface ConnectorServiceApi
 */
export interface ConnectorServiceApiInterface {
    /**
     * Returns the version metadata
     * @summary Returns the version metadata
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorServiceApiInterface
     */
    getVersionMetadata(options?: AxiosRequestConfig): AxiosPromise<VersionMetadata>;

}

/**
 * ConnectorServiceApi - object-oriented interface
 * @export
 * @class ConnectorServiceApi
 * @extends {BaseAPI}
 */
export class ConnectorServiceApi extends BaseAPI implements ConnectorServiceApiInterface {
    /**
     * Returns the version metadata
     * @summary Returns the version metadata
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorServiceApi
     */
    public getVersionMetadata(options?: AxiosRequestConfig) {
        return ConnectorServiceApiFp(this.configuration).getVersionMetadata(options).then((request) => request(this.axios, this.basePath));
    }
}
