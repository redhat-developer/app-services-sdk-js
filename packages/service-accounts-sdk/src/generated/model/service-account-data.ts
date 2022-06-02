/* tslint:disable */
/* eslint-disable */
/**
 * Service Accounts API Documentation
 * This is the API documentation for Service Accounts
 *
 * The version of the OpenAPI document: 5.0.19
 * Contact: it-user-team-list@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ServiceAccountData
 */
export interface ServiceAccountData {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountData
     */
    'clientId'?: string;
    /**
     * Provided during creation and resetting of service account credentials.
     * @type {string}
     * @memberof ServiceAccountData
     */
    'secret'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountData
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountData
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountData
     */
    'createdBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof ServiceAccountData
     */
    'createdAt'?: number;
}

