/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Management API
 * Kafka Management API is a REST API to manage Kafka instances
 *
 * The version of the OpenAPI document: 1.16.0
 * Contact: rhosak-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ServiceAccountAllOf
 */
export interface ServiceAccountAllOf {
    /**
     * server generated unique id of the service account
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    'client_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    'client_secret'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     * @deprecated
     */
    'owner'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    'created_by'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    'created_at'?: string;
}

