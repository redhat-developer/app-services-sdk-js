/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kafka instances.
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Schema for the request body sent to /kafkas POST
 * @export
 * @interface KafkaRequestPayload
 */
export interface KafkaRequestPayload {
    /**
     * The cloud provider where the Kafka cluster will be created in
     * @type {string}
     * @memberof KafkaRequestPayload
     */
    'cloud_provider'?: string;
    /**
     * Set this to true to configure the Kafka cluster to be multiAZ
     * @type {boolean}
     * @memberof KafkaRequestPayload
     */
    'multi_az'?: boolean;
    /**
     * The name of the Kafka cluster. It must consist of lower-case alphanumeric characters or \'-\', start with an alphabetic character, and end with an alphanumeric character, and can not be longer than 32 characters.
     * @type {string}
     * @memberof KafkaRequestPayload
     */
    'name': string;
    /**
     * The region where the Kafka cluster will be created in
     * @type {string}
     * @memberof KafkaRequestPayload
     */
    'region'?: string;
    /**
     * Whether connection reauthentication is enabled or not. If set to true, connection reauthentication on the Kafka instance will be required every 5 minutes. The default value is true
     * @type {boolean}
     * @memberof KafkaRequestPayload
     */
    'reauthentication_enabled'?: boolean | null;
}

