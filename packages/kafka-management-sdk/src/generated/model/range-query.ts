/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kafka instances.
 *
 * The version of the OpenAPI document: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Values } from './values';

/**
 * 
 * @export
 * @interface RangeQuery
 */
export interface RangeQuery {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RangeQuery
     */
    'metric'?: { [key: string]: string; };
    /**
     * 
     * @type {Array<Values>}
     * @memberof RangeQuery
     */
    'values'?: Array<Values>;
}

