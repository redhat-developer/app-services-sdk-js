/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Key value pair indicating possible configuration options for a topic.
 * @export
 * @interface ConfigEntry
 */
export interface ConfigEntry {
    /**
     * The key indicating what configuration entry you would like to set for the topic.
     * @type {string}
     * @memberof ConfigEntry
     */
    'key': string;
    /**
     * Value to indicate the setting on the topic configuration entry.
     * @type {string}
     * @memberof ConfigEntry
     */
    'value': string;
}

