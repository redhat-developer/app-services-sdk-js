/* tslint:disable */
/* eslint-disable */
/**
 * Account Management Service API
 * Manage user subscriptions and clusters
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ClusterTransferAllOf
 */
export interface ClusterTransferAllOf {
    /**
     * 
     * @type {string}
     * @memberof ClusterTransferAllOf
     */
    'cluster_uuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterTransferAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterTransferAllOf
     */
    'expiration_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterTransferAllOf
     */
    'owner'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterTransferAllOf
     */
    'recipient'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterTransferAllOf
     */
    'secret'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterTransferAllOf
     */
    'status'?: ClusterTransferAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ClusterTransferAllOf
     */
    'updated_at'?: string;
}

export const ClusterTransferAllOfStatusEnum = {
    Pending: 'Pending',
    Accepted: 'Accepted',
    Declined: 'Declined',
    Rescinded: 'Rescinded',
    Completed: 'Completed'
} as const;

export type ClusterTransferAllOfStatusEnum = typeof ClusterTransferAllOfStatusEnum[keyof typeof ClusterTransferAllOfStatusEnum];


