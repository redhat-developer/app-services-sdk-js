/* tslint:disable */
/* eslint-disable */
/**
 * clusters_mgmt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: ocm-feedback@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Definition of a subscription.
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * Indicates the type of this object. Will be \'Subscription\' if this is a complete object or \'SubscriptionLink\' if it is just a link.
     * @type {string}
     * @memberof Subscription
     */
    'kind'?: string;
    /**
     * Unique identifier of the object.
     * @type {string}
     * @memberof Subscription
     */
    'id'?: string;
    /**
     * Self link.
     * @type {string}
     * @memberof Subscription
     */
    'href'?: string;
}

