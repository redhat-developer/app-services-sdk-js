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



/**
 * 
 * @export
 * @interface InstantQuery
 */
export interface InstantQuery {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof InstantQuery
     */
    'metric'?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof InstantQuery
     */
    'timestamp'?: number;
    /**
     * 
     * @type {number}
     * @memberof InstantQuery
     */
    'value': number;
}

