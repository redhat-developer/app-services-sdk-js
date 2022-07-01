/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Management API
 * Kafka Management API is a REST API to manage Kafka instances
 *
 * The version of the OpenAPI document: 1.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InstantQuery } from './instant-query';

/**
 * 
 * @export
 * @interface MetricsInstantQueryListAllOf
 */
export interface MetricsInstantQueryListAllOf {
    /**
     * 
     * @type {string}
     * @memberof MetricsInstantQueryListAllOf
     */
    'kind'?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsInstantQueryListAllOf
     */
    'id'?: string;
    /**
     * 
     * @type {Array<InstantQuery>}
     * @memberof MetricsInstantQueryListAllOf
     */
    'items'?: Array<InstantQuery>;
}

