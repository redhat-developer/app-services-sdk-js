/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift SmartEvents Fleet Manager V2
 * The API exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ConnectorRequest
 */
export interface ConnectorRequest {
    /**
     * The name of the connector
     * @type {string}
     * @memberof ConnectorRequest
     */
    'name': string;
    /**
     * The name of the connector
     * @type {string}
     * @memberof ConnectorRequest
     */
    'connector_type_id': string;
    /**
     * The Connector configuration payload
     * @type {object}
     * @memberof ConnectorRequest
     */
    'connector': object;
}

