/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kafka instances.
 *
 * The version of the OpenAPI document: 1.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface KafkaUpdateRequest
 */
export interface KafkaUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof KafkaUpdateRequest
     */
    'owner'?: string | null;
    /**
     * Whether connection reauthentication is enabled or not. If set to true, connection reauthentication on the Kafka instance will be required every 5 minutes.
     * @type {boolean}
     * @memberof KafkaUpdateRequest
     */
    'reauthentication_enabled'?: boolean | null;
}

