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


import { Channel } from './channel';

/**
 * 
 * @export
 * @interface ConnectorTypeAllOf
 */
export interface ConnectorTypeAllOf {
    /**
     * Name of the connector type.
     * @type {string}
     * @memberof ConnectorTypeAllOf
     */
    'name'?: string;
    /**
     * Version of the connector type.
     * @type {string}
     * @memberof ConnectorTypeAllOf
     */
    'version'?: string;
    /**
     * Channels of the connector type.
     * @type {Array<Channel>}
     * @memberof ConnectorTypeAllOf
     */
    'channels'?: Array<Channel>;
    /**
     * A description of the connector.
     * @type {string}
     * @memberof ConnectorTypeAllOf
     */
    'description'?: string;
    /**
     * Connector type is deprecated and removed from the catalog.
     * @type {boolean}
     * @memberof ConnectorTypeAllOf
     */
    'deprecated'?: boolean;
    /**
     * URL to an icon of the connector.
     * @type {string}
     * @memberof ConnectorTypeAllOf
     */
    'icon_href'?: string;
    /**
     * Labels used to categorize the connector
     * @type {Array<string>}
     * @memberof ConnectorTypeAllOf
     */
    'labels'?: Array<string>;
    /**
     * Name-value string annotations for resource
     * @type {{ [key: string]: string; }}
     * @memberof ConnectorTypeAllOf
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Ranking for featured connectors
     * @type {number}
     * @memberof ConnectorTypeAllOf
     */
    'featured_rank'?: number;
    /**
     * The capabilities supported by the connector
     * @type {Array<string>}
     * @memberof ConnectorTypeAllOf
     */
    'capabilities'?: Array<string>;
    /**
     * A json schema that can be used to validate a ConnectorRequest connector field.
     * @type {object}
     * @memberof ConnectorTypeAllOf
     */
    'schema'?: object;
}

