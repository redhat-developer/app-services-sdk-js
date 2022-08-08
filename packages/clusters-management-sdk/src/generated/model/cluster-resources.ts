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
 * Cluster Resource which belongs to a cluster, example Cluster Deployment.
 * @export
 * @interface ClusterResources
 */
export interface ClusterResources {
    /**
     * Indicates the type of this object. Will be \'ClusterResources\' if this is a complete object or \'ClusterResourcesLink\' if it is just a link.
     * @type {string}
     * @memberof ClusterResources
     */
    'kind'?: string;
    /**
     * Unique identifier of the object.
     * @type {string}
     * @memberof ClusterResources
     */
    'id'?: string;
    /**
     * Self link.
     * @type {string}
     * @memberof ClusterResources
     */
    'href'?: string;
    /**
     * Cluster ID for the fetched resources
     * @type {string}
     * @memberof ClusterResources
     */
    'cluster_id'?: string;
    /**
     * Date and time when the resources were fetched.
     * @type {string}
     * @memberof ClusterResources
     */
    'creation_timestamp'?: string;
    /**
     * Returned map of cluster resources fetched.
     * @type {{ [key: string]: string; }}
     * @memberof ClusterResources
     */
    'resources'?: { [key: string]: string; };
}

