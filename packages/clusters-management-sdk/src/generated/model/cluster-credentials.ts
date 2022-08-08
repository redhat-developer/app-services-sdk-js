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


import { AdminCredentials } from './admin-credentials';
import { SSHCredentials } from './sshcredentials';

/**
 * Credentials of the a cluster.
 * @export
 * @interface ClusterCredentials
 */
export interface ClusterCredentials {
    /**
     * Indicates the type of this object. Will be \'ClusterCredentials\' if this is a complete object or \'ClusterCredentialsLink\' if it is just a link.
     * @type {string}
     * @memberof ClusterCredentials
     */
    'kind'?: string;
    /**
     * Unique identifier of the object.
     * @type {string}
     * @memberof ClusterCredentials
     */
    'id'?: string;
    /**
     * Self link.
     * @type {string}
     * @memberof ClusterCredentials
     */
    'href'?: string;
    /**
     * 
     * @type {SSHCredentials}
     * @memberof ClusterCredentials
     */
    'ssh'?: SSHCredentials;
    /**
     * 
     * @type {AdminCredentials}
     * @memberof ClusterCredentials
     */
    'admin'?: AdminCredentials;
    /**
     * Administrator _kubeconfig_ file for the cluster.
     * @type {string}
     * @memberof ClusterCredentials
     */
    'kubeconfig'?: string;
}

