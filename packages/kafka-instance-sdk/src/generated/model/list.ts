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



/**
 * 
 * @export
 * @interface List
 */
export interface List {
    /**
     * 
     * @type {string}
     * @memberof List
     */
    'kind'?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof List
     */
    'items': Array<object>;
    /**
     * Total number of entries in the full result set
     * @type {number}
     * @memberof List
     */
    'total': number;
    /**
     * Number of entries per page (returned for fetch requests)
     * @type {number}
     * @memberof List
     */
    'size'?: number;
    /**
     * Current page number (returned for fetch requests)
     * @type {number}
     * @memberof List
     */
    'page'?: number;
}

