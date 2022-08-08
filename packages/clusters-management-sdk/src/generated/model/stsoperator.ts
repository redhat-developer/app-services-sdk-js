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
 * Representation of an sts operator
 * @export
 * @interface STSOperator
 */
export interface STSOperator {
    /**
     * Maximum ocp version supported
     * @type {string}
     * @memberof STSOperator
     */
    'max_version'?: string;
    /**
     * Minimum ocp version supported
     * @type {string}
     * @memberof STSOperator
     */
    'min_version'?: string;
    /**
     * Operator Name
     * @type {string}
     * @memberof STSOperator
     */
    'name'?: string;
    /**
     * Operator Namespace
     * @type {string}
     * @memberof STSOperator
     */
    'namespace'?: string;
    /**
     * Service Accounts
     * @type {Array<string>}
     * @memberof STSOperator
     */
    'service_accounts'?: Array<string>;
}

