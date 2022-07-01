/* tslint:disable */
/* eslint-disable */
/**
 * Connector Management API
 * Connector Management API is a REST API to manage connectors.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConnectorNamespaceTenantKind } from './connector-namespace-tenant-kind';

/**
 * 
 * @export
 * @interface ConnectorNamespaceRequestAllOf
 */
export interface ConnectorNamespaceRequestAllOf {
    /**
     * 
     * @type {string}
     * @memberof ConnectorNamespaceRequestAllOf
     */
    'cluster_id'?: string;
    /**
     * 
     * @type {ConnectorNamespaceTenantKind}
     * @memberof ConnectorNamespaceRequestAllOf
     */
    'kind'?: ConnectorNamespaceTenantKind;
}

