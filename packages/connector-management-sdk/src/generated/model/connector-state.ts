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

export const ConnectorState = {
    Assigning: 'assigning',
    Assigned: 'assigned',
    Updating: 'updating',
    Ready: 'ready',
    Stopped: 'stopped',
    Failed: 'failed',
    Deleting: 'deleting',
    Deleted: 'deleted',
    Provisioning: 'provisioning',
    Deprovisioning: 'deprovisioning'
} as const;

export type ConnectorState = typeof ConnectorState[keyof typeof ConnectorState];



