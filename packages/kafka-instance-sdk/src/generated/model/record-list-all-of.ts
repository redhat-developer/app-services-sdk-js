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


import { Record } from './record';

/**
 * A page of records consumed from a topic
 * @export
 * @interface RecordListAllOf
 */
export interface RecordListAllOf {
    /**
     * 
     * @type {Array<Record>}
     * @memberof RecordListAllOf
     */
    'items'?: Array<Record>;
    /**
     * Total number of records returned in this request. This value does not indicate the total number of records in the topic.
     * @type {number}
     * @memberof RecordListAllOf
     */
    'total'?: number;
    /**
     * Not used
     * @type {number}
     * @memberof RecordListAllOf
     */
    'size'?: number;
    /**
     * Not used
     * @type {number}
     * @memberof RecordListAllOf
     */
    'page'?: number;
}

