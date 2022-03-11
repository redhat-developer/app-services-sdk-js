/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.7.1-SNAPSHOT
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
 * @interface RecordList
 */
export interface RecordList {
    /**
     * Total number of records returned in this request. This value does not indicate the total number of records in the topic.
     * @type {number}
     * @memberof RecordList
     */
    'total': number;
    /**
     * Not used
     * @type {number}
     * @memberof RecordList
     */
    'size'?: number;
    /**
     * Not used
     * @type {number}
     * @memberof RecordList
     */
    'page'?: number;
    /**
     * 
     * @type {Array<Record>}
     * @memberof RecordList
     */
    'items': Array<Record>;
}

