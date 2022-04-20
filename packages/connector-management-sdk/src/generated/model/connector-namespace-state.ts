/* tslint:disable */
/* eslint-disable */
/**
 * Connector Service Fleet Manager
 * Connector Service Fleet Manager is a Rest API to manage connectors.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const ConnectorNamespaceState = {
    Disconnected: 'disconnected',
    Ready: 'ready',
    Deleting: 'deleting',
    Deleted: 'deleted'
} as const;

export type ConnectorNamespaceState = typeof ConnectorNamespaceState[keyof typeof ConnectorNamespaceState];



