/* tslint:disable */
/* eslint-disable */
/**
 * Connector Management API
 * Connector Management API is a REST API to manage connectors.
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: rhosak-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConnectorState } from './connector-state';

/**
 * 
 * @export
 * @interface ConnectorStatusStatus
 */
export interface ConnectorStatusStatus {
    /**
     * 
     * @type {ConnectorState}
     * @memberof ConnectorStatusStatus
     */
    'state'?: ConnectorState;
    /**
     * 
     * @type {string}
     * @memberof ConnectorStatusStatus
     */
    'error'?: string;
}

