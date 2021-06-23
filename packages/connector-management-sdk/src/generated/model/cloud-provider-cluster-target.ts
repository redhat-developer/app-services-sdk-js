/* tslint:disable */
/* eslint-disable */
/**
 * Connector Service Fleet Manager
 * Connector Service Fleet Manager is a Rest API to manage connectors.
 *
 * The version of the OpenAPI document: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Targets workloads to a cloud provider
 * @export
 * @interface CloudProviderClusterTarget
 */
export interface CloudProviderClusterTarget {
    /**
     * 
     * @type {string}
     * @memberof CloudProviderClusterTarget
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof CloudProviderClusterTarget
     */
    cloud_provider?: string;
    /**
     * 
     * @type {string}
     * @memberof CloudProviderClusterTarget
     */
    region?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CloudProviderClusterTarget
     */
    multi_az?: boolean;
}


