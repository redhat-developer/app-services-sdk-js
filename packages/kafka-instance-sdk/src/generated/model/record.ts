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



/**
 * An individual record consumed from a topic or produced to a topic
 * @export
 * @interface Record
 */
export interface Record {
    /**
     * The record\'s partition within the topic
     * @type {number}
     * @memberof Record
     */
    'partition'?: number;
    /**
     * The record\'s offset within the topic partition
     * @type {number}
     * @memberof Record
     */
    'offset'?: number;
    /**
     * Timestamp associated with the record. The type is indicated by `timestampType`. When producing a record, this value will be used as the record\'s `CREATE_TIME`.
     * @type {string}
     * @memberof Record
     */
    'timestamp'?: string;
    /**
     * Type of timestamp associated with the record
     * @type {string}
     * @memberof Record
     */
    'timestampType'?: string;
    /**
     * Record headers, key/value pairs
     * @type {{ [key: string]: string; }}
     * @memberof Record
     */
    'headers'?: { [key: string]: string; };
    /**
     * Record key
     * @type {string}
     * @memberof Record
     */
    'key'?: string;
    /**
     * Record value
     * @type {string}
     * @memberof Record
     */
    'value': string;
}

