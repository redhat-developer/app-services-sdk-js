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
 * Overall state of a cluster operator.
 * @export
 * @enum {string}
 */

export const ClusterOperatorState = {
    Available: 'available',
    Degraded: 'degraded',
    Failing: 'failing',
    Upgrading: 'upgrading'
} as const;

export type ClusterOperatorState = typeof ClusterOperatorState[keyof typeof ClusterOperatorState];



