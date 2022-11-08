/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Management API
 * Kafka Management API is a REST API to manage Kafka instances
 *
 * The version of the OpenAPI document: 1.13.0
 * Contact: rhosak-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ServiceAccountListItem } from './service-account-list-item';

/**
 * 
 * @export
 * @interface ServiceAccountListAllOf
 */
export interface ServiceAccountListAllOf {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountListAllOf
     */
    'kind': string;
    /**
     * 
     * @type {Array<ServiceAccountListItem>}
     * @memberof ServiceAccountListAllOf
     */
    'items': Array<ServiceAccountListItem>;
}

