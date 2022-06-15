/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.11.1
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
import { Record } from '../model';
// @ts-ignore
import { RecordIncludedProperty } from '../model';
// @ts-ignore
import { RecordList } from '../model';
/**
 * RecordsApi - axios parameter creator
 * @export
 */
export const RecordsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Consume a limited number of records from a topic, optionally specifying a partition and an absolute offset or timestamp as the starting point for message retrieval.
         * @summary Consume records from a topic
         * @param {string} topicName Topic name
         * @param {Array<RecordIncludedProperty>} [include] List of properties to include for each record in the response
         * @param {number} [limit] Limit the number of records fetched and returned
         * @param {number} [maxValueLength] Maximum length of string values returned in the response. Values with a length that exceeds this parameter will be truncated. When this parameter is not included in the request, the full string values will be returned.
         * @param {number} [offset] Retrieve messages with an offset equal to or greater than this offset. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
         * @param {number} [partition] Retrieve messages only from this partition
         * @param {any} [timestamp] Retrieve messages with a timestamp equal to or later than this timestamp. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        consumeRecords: async (topicName: string, include?: Array<RecordIncludedProperty>, limit?: number, maxValueLength?: number, offset?: number, partition?: number, timestamp?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicName' is not null or undefined
            assertParamExists('consumeRecords', 'topicName', topicName)
            const localVarPath = `/api/v1/topics/{topicName}/records`
                .replace(`{${"topicName"}}`, encodeURIComponent(String(topicName)));
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

            if (include) {
                localVarQueryParameter['include'] = include.join(COLLECTION_FORMATS.csv);
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (maxValueLength !== undefined) {
                localVarQueryParameter['maxValueLength'] = maxValueLength;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (partition !== undefined) {
                localVarQueryParameter['partition'] = partition;
            }

            if (timestamp !== undefined) {
                localVarQueryParameter['timestamp'] = timestamp;
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
         * Produce (write) a single record to a topic.
         * @summary Send a record to a topic
         * @param {string} topicName Topic name
         * @param {Record} record 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        produceRecord: async (topicName: string, record: Record, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicName' is not null or undefined
            assertParamExists('produceRecord', 'topicName', topicName)
            // verify required parameter 'record' is not null or undefined
            assertParamExists('produceRecord', 'record', record)
            const localVarPath = `/api/v1/topics/{topicName}/records`
                .replace(`{${"topicName"}}`, encodeURIComponent(String(topicName)));
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

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(record, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecordsApi - functional programming interface
 * @export
 */
export const RecordsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RecordsApiAxiosParamCreator(configuration)
    return {
        /**
         * Consume a limited number of records from a topic, optionally specifying a partition and an absolute offset or timestamp as the starting point for message retrieval.
         * @summary Consume records from a topic
         * @param {string} topicName Topic name
         * @param {Array<RecordIncludedProperty>} [include] List of properties to include for each record in the response
         * @param {number} [limit] Limit the number of records fetched and returned
         * @param {number} [maxValueLength] Maximum length of string values returned in the response. Values with a length that exceeds this parameter will be truncated. When this parameter is not included in the request, the full string values will be returned.
         * @param {number} [offset] Retrieve messages with an offset equal to or greater than this offset. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
         * @param {number} [partition] Retrieve messages only from this partition
         * @param {any} [timestamp] Retrieve messages with a timestamp equal to or later than this timestamp. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async consumeRecords(topicName: string, include?: Array<RecordIncludedProperty>, limit?: number, maxValueLength?: number, offset?: number, partition?: number, timestamp?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecordList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.consumeRecords(topicName, include, limit, maxValueLength, offset, partition, timestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Produce (write) a single record to a topic.
         * @summary Send a record to a topic
         * @param {string} topicName Topic name
         * @param {Record} record 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async produceRecord(topicName: string, record: Record, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Record>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.produceRecord(topicName, record, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecordsApi - factory interface
 * @export
 */
export const RecordsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecordsApiFp(configuration)
    return {
        /**
         * Consume a limited number of records from a topic, optionally specifying a partition and an absolute offset or timestamp as the starting point for message retrieval.
         * @summary Consume records from a topic
         * @param {string} topicName Topic name
         * @param {Array<RecordIncludedProperty>} [include] List of properties to include for each record in the response
         * @param {number} [limit] Limit the number of records fetched and returned
         * @param {number} [maxValueLength] Maximum length of string values returned in the response. Values with a length that exceeds this parameter will be truncated. When this parameter is not included in the request, the full string values will be returned.
         * @param {number} [offset] Retrieve messages with an offset equal to or greater than this offset. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
         * @param {number} [partition] Retrieve messages only from this partition
         * @param {any} [timestamp] Retrieve messages with a timestamp equal to or later than this timestamp. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        consumeRecords(topicName: string, include?: Array<RecordIncludedProperty>, limit?: number, maxValueLength?: number, offset?: number, partition?: number, timestamp?: any, options?: any): AxiosPromise<RecordList> {
            return localVarFp.consumeRecords(topicName, include, limit, maxValueLength, offset, partition, timestamp, options).then((request) => request(axios, basePath));
        },
        /**
         * Produce (write) a single record to a topic.
         * @summary Send a record to a topic
         * @param {string} topicName Topic name
         * @param {Record} record 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        produceRecord(topicName: string, record: Record, options?: any): AxiosPromise<Record> {
            return localVarFp.produceRecord(topicName, record, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecordsApi - interface
 * @export
 * @interface RecordsApi
 */
export interface RecordsApiInterface {
    /**
     * Consume a limited number of records from a topic, optionally specifying a partition and an absolute offset or timestamp as the starting point for message retrieval.
     * @summary Consume records from a topic
     * @param {string} topicName Topic name
     * @param {Array<RecordIncludedProperty>} [include] List of properties to include for each record in the response
     * @param {number} [limit] Limit the number of records fetched and returned
     * @param {number} [maxValueLength] Maximum length of string values returned in the response. Values with a length that exceeds this parameter will be truncated. When this parameter is not included in the request, the full string values will be returned.
     * @param {number} [offset] Retrieve messages with an offset equal to or greater than this offset. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
     * @param {number} [partition] Retrieve messages only from this partition
     * @param {any} [timestamp] Retrieve messages with a timestamp equal to or later than this timestamp. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordsApiInterface
     */
    consumeRecords(topicName: string, include?: Array<RecordIncludedProperty>, limit?: number, maxValueLength?: number, offset?: number, partition?: number, timestamp?: any, options?: AxiosRequestConfig): AxiosPromise<RecordList>;

    /**
     * Produce (write) a single record to a topic.
     * @summary Send a record to a topic
     * @param {string} topicName Topic name
     * @param {Record} record 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordsApiInterface
     */
    produceRecord(topicName: string, record: Record, options?: AxiosRequestConfig): AxiosPromise<Record>;

}

/**
 * RecordsApi - object-oriented interface
 * @export
 * @class RecordsApi
 * @extends {BaseAPI}
 */
export class RecordsApi extends BaseAPI implements RecordsApiInterface {
    /**
     * Consume a limited number of records from a topic, optionally specifying a partition and an absolute offset or timestamp as the starting point for message retrieval.
     * @summary Consume records from a topic
     * @param {string} topicName Topic name
     * @param {Array<RecordIncludedProperty>} [include] List of properties to include for each record in the response
     * @param {number} [limit] Limit the number of records fetched and returned
     * @param {number} [maxValueLength] Maximum length of string values returned in the response. Values with a length that exceeds this parameter will be truncated. When this parameter is not included in the request, the full string values will be returned.
     * @param {number} [offset] Retrieve messages with an offset equal to or greater than this offset. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
     * @param {number} [partition] Retrieve messages only from this partition
     * @param {any} [timestamp] Retrieve messages with a timestamp equal to or later than this timestamp. If both &#x60;timestamp&#x60; and &#x60;offset&#x60; are requested, &#x60;timestamp&#x60; is given preference.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordsApi
     */
    public consumeRecords(topicName: string, include?: Array<RecordIncludedProperty>, limit?: number, maxValueLength?: number, offset?: number, partition?: number, timestamp?: any, options?: AxiosRequestConfig) {
        return RecordsApiFp(this.configuration).consumeRecords(topicName, include, limit, maxValueLength, offset, partition, timestamp, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Produce (write) a single record to a topic.
     * @summary Send a record to a topic
     * @param {string} topicName Topic name
     * @param {Record} record 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordsApi
     */
    public produceRecord(topicName: string, record: Record, options?: AxiosRequestConfig) {
        return RecordsApiFp(this.configuration).produceRecord(topicName, record, options).then((request) => request(this.axios, this.basePath));
    }
}
