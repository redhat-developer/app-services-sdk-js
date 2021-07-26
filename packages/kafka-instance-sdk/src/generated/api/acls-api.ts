/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AclBinding } from '../model';
// @ts-ignore
import { AclBindingListPage } from '../model';
// @ts-ignore
import { AclOperationFilter } from '../model';
// @ts-ignore
import { AclPatternTypeFilter } from '../model';
// @ts-ignore
import { AclPermissionTypeFilter } from '../model';
// @ts-ignore
import { AclResourceTypeFilter } from '../model';
/**
 * AclsApi - axios parameter creator
 * @export
 */
export const AclsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new ACL binding for a Kafka instance.
         * @summary Create ACL binding
         * @param {AclBinding} aclBinding ACL to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAcl: async (aclBinding: AclBinding, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'aclBinding' is not null or undefined
            assertParamExists('createAcl', 'aclBinding', aclBinding)
            const localVarPath = `/acls`;
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
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aclBinding, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes ACL bindings that match the query parameters.
         * @summary Delete ACL bindings
         * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
         * @param {string} [resourceName] ACL Resource Name Filter
         * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
         * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
         * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
         * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAcls: async (resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/acls`;
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
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

            if (resourceType !== undefined) {
                localVarQueryParameter['resourceType'] = resourceType;
            }

            if (resourceName !== undefined) {
                localVarQueryParameter['resourceName'] = resourceName;
            }

            if (patternType !== undefined) {
                localVarQueryParameter['patternType'] = patternType;
            }

            if (principal !== undefined) {
                localVarQueryParameter['principal'] = principal;
            }

            if (operation !== undefined) {
                localVarQueryParameter['operation'] = operation;
            }

            if (permission !== undefined) {
                localVarQueryParameter['permission'] = permission;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the resources and associated operations that may have ACLs configured.
         * @summary Retrieve allowed ACL resources and operations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAclResourceOperations: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/acls/resource-operations`;
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
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all of the available ACL bindings, or the list of bindings that meet the users URL Query Parameters. If no parameters are specified, all ACL bindings known to the system will be returned (with paging).
         * @summary List ACL bindings
         * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
         * @param {string} [resourceName] ACL Resource Name Filter
         * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
         * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
         * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
         * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
         * @param {number} [page] Page number for result lists
         * @param {number} [size] Page size for result lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAcls: async (resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, page?: number, size?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/acls`;
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
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

            if (resourceType !== undefined) {
                localVarQueryParameter['resourceType'] = resourceType;
            }

            if (resourceName !== undefined) {
                localVarQueryParameter['resourceName'] = resourceName;
            }

            if (patternType !== undefined) {
                localVarQueryParameter['patternType'] = patternType;
            }

            if (principal !== undefined) {
                localVarQueryParameter['principal'] = principal;
            }

            if (operation !== undefined) {
                localVarQueryParameter['operation'] = operation;
            }

            if (permission !== undefined) {
                localVarQueryParameter['permission'] = permission;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
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
 * AclsApi - functional programming interface
 * @export
 */
export const AclsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AclsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new ACL binding for a Kafka instance.
         * @summary Create ACL binding
         * @param {AclBinding} aclBinding ACL to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAcl(aclBinding: AclBinding, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAcl(aclBinding, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes ACL bindings that match the query parameters.
         * @summary Delete ACL bindings
         * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
         * @param {string} [resourceName] ACL Resource Name Filter
         * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
         * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
         * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
         * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAcls(resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AclBindingListPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAcls(resourceType, resourceName, patternType, principal, operation, permission, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve the resources and associated operations that may have ACLs configured.
         * @summary Retrieve allowed ACL resources and operations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAclResourceOperations(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<string>; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAclResourceOperations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all of the available ACL bindings, or the list of bindings that meet the users URL Query Parameters. If no parameters are specified, all ACL bindings known to the system will be returned (with paging).
         * @summary List ACL bindings
         * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
         * @param {string} [resourceName] ACL Resource Name Filter
         * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
         * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
         * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
         * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
         * @param {number} [page] Page number for result lists
         * @param {number} [size] Page size for result lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAcls(resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, page?: number, size?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AclBindingListPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAcls(resourceType, resourceName, patternType, principal, operation, permission, page, size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AclsApi - factory interface
 * @export
 */
export const AclsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AclsApiFp(configuration)
    return {
        /**
         * Creates a new ACL binding for a Kafka instance.
         * @summary Create ACL binding
         * @param {AclBinding} aclBinding ACL to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAcl(aclBinding: AclBinding, options?: any): AxiosPromise<void> {
            return localVarFp.createAcl(aclBinding, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes ACL bindings that match the query parameters.
         * @summary Delete ACL bindings
         * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
         * @param {string} [resourceName] ACL Resource Name Filter
         * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
         * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
         * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
         * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAcls(resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, options?: any): AxiosPromise<AclBindingListPage> {
            return localVarFp.deleteAcls(resourceType, resourceName, patternType, principal, operation, permission, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the resources and associated operations that may have ACLs configured.
         * @summary Retrieve allowed ACL resources and operations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAclResourceOperations(options?: any): AxiosPromise<{ [key: string]: Array<string>; }> {
            return localVarFp.getAclResourceOperations(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all of the available ACL bindings, or the list of bindings that meet the users URL Query Parameters. If no parameters are specified, all ACL bindings known to the system will be returned (with paging).
         * @summary List ACL bindings
         * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
         * @param {string} [resourceName] ACL Resource Name Filter
         * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
         * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
         * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
         * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
         * @param {number} [page] Page number for result lists
         * @param {number} [size] Page size for result lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAcls(resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, page?: number, size?: number, options?: any): AxiosPromise<AclBindingListPage> {
            return localVarFp.getAcls(resourceType, resourceName, patternType, principal, operation, permission, page, size, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AclsApi - interface
 * @export
 * @interface AclsApi
 */
export interface AclsApiInterface {
    /**
     * Creates a new ACL binding for a Kafka instance.
     * @summary Create ACL binding
     * @param {AclBinding} aclBinding ACL to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AclsApiInterface
     */
    createAcl(aclBinding: AclBinding, options?: any): AxiosPromise<void>;

    /**
     * Deletes ACL bindings that match the query parameters.
     * @summary Delete ACL bindings
     * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
     * @param {string} [resourceName] ACL Resource Name Filter
     * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
     * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
     * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
     * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AclsApiInterface
     */
    deleteAcls(resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, options?: any): AxiosPromise<AclBindingListPage>;

    /**
     * Retrieve the resources and associated operations that may have ACLs configured.
     * @summary Retrieve allowed ACL resources and operations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AclsApiInterface
     */
    getAclResourceOperations(options?: any): AxiosPromise<{ [key: string]: Array<string>; }>;

    /**
     * Returns a list of all of the available ACL bindings, or the list of bindings that meet the users URL Query Parameters. If no parameters are specified, all ACL bindings known to the system will be returned (with paging).
     * @summary List ACL bindings
     * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
     * @param {string} [resourceName] ACL Resource Name Filter
     * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
     * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
     * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
     * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
     * @param {number} [page] Page number for result lists
     * @param {number} [size] Page size for result lists
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AclsApiInterface
     */
    getAcls(resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, page?: number, size?: number, options?: any): AxiosPromise<AclBindingListPage>;

}

/**
 * AclsApi - object-oriented interface
 * @export
 * @class AclsApi
 * @extends {BaseAPI}
 */
export class AclsApi extends BaseAPI implements AclsApiInterface {
    /**
     * Creates a new ACL binding for a Kafka instance.
     * @summary Create ACL binding
     * @param {AclBinding} aclBinding ACL to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AclsApi
     */
    public createAcl(aclBinding: AclBinding, options?: any) {
        return AclsApiFp(this.configuration).createAcl(aclBinding, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes ACL bindings that match the query parameters.
     * @summary Delete ACL bindings
     * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
     * @param {string} [resourceName] ACL Resource Name Filter
     * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
     * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
     * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
     * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AclsApi
     */
    public deleteAcls(resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, options?: any) {
        return AclsApiFp(this.configuration).deleteAcls(resourceType, resourceName, patternType, principal, operation, permission, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve the resources and associated operations that may have ACLs configured.
     * @summary Retrieve allowed ACL resources and operations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AclsApi
     */
    public getAclResourceOperations(options?: any) {
        return AclsApiFp(this.configuration).getAclResourceOperations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all of the available ACL bindings, or the list of bindings that meet the users URL Query Parameters. If no parameters are specified, all ACL bindings known to the system will be returned (with paging).
     * @summary List ACL bindings
     * @param {AclResourceTypeFilter} [resourceType] ACL Resource Type Filter
     * @param {string} [resourceName] ACL Resource Name Filter
     * @param {AclPatternTypeFilter} [patternType] ACL Pattern Type Filter
     * @param {string} [principal] ACL Principal Filter. Either a specific user or the wildcard user &#x60;User:*&#x60; may be provided. - When fetching by a specific user, the results will also include ACL bindings that apply to all users. - When deleting, ACL bindings to be delete must match the provided &#x60;principal&#x60; exactly.
     * @param {AclOperationFilter} [operation] ACL Operation Filter. The ACL binding operation provided should be valid for the resource type in the request, if not &#x60;ANY&#x60;.
     * @param {AclPermissionTypeFilter} [permission] ACL Permission Type Filter
     * @param {number} [page] Page number for result lists
     * @param {number} [size] Page size for result lists
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AclsApi
     */
    public getAcls(resourceType?: AclResourceTypeFilter, resourceName?: string, patternType?: AclPatternTypeFilter, principal?: string, operation?: AclOperationFilter, permission?: AclPermissionTypeFilter, page?: number, size?: number, options?: any) {
        return AclsApiFp(this.configuration).getAcls(resourceType, resourceName, patternType, principal, operation, permission, page, size, options).then((request) => request(this.axios, this.basePath));
    }
}
