/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An individual record consumed from a topic or produced to a topic
 * @export
 * @interface Record1
 */
export interface Record1 {
    /**
     * The record\'s partition within the topic
     * @type {number}
     * @memberof Record1
     */
    'partition'?: number;
    /**
     * The record\'s offset within the topic partition
     * @type {number}
     * @memberof Record1
     */
    'offset'?: number;
    /**
     * Timestamp associated with the record. The type is indicated by `timestampType`. When producing a record, this value will be used as the record\'s `CREATE_TIME`.
     * @type {string}
     * @memberof Record1
     */
    'timestamp'?: string;
    /**
     * Type of timestamp associated with the record
     * @type {string}
     * @memberof Record1
     */
    'timestampType'?: string;
    /**
     * Record headers, key/value pairs
     * @type {{ [key: string]: string; }}
     * @memberof Record1
     */
    'headers'?: { [key: string]: string; };
    /**
     * Record key
     * @type {string}
     * @memberof Record1
     */
    'key'?: string;
    /**
     * Record value
     * @type {string}
     * @memberof Record1
     */
    'value': string;
}

