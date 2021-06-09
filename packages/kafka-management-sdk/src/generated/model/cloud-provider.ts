/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kakfa instances and connectors.
 *
 * The version of the OpenAPI document: 1.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Cloud provider.
 * @export
 * @interface CloudProvider
 */
export interface CloudProvider {
    /**
     * Indicates the type of this object. Will be \'CloudProvider\' link.
     * @type {string}
     * @memberof CloudProvider
     */
    kind?: string;
    /**
     * Unique identifier of the object.
     * @type {string}
     * @memberof CloudProvider
     */
    id?: string;
    /**
     * Name of the cloud provider for display purposes.
     * @type {string}
     * @memberof CloudProvider
     */
    display_name?: string;
    /**
     * Human friendly identifier of the cloud provider, for example `aws`.
     * @type {string}
     * @memberof CloudProvider
     */
    name?: string;
    /**
     * Whether the cloud provider is enabled for deploying an OSD cluster.
     * @type {boolean}
     * @memberof CloudProvider
     */
    enabled: boolean;
}

