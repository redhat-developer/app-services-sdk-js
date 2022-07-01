/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Management API
 * Kafka Management API is a REST API to manage Kafka instances
 *
 * The version of the OpenAPI document: 1.11.0
 * Contact: rhosak-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SupportedKafkaSize } from './supported-kafka-size';

/**
 * Supported Kafka instance type
 * @export
 * @interface SupportedKafkaInstanceType
 */
export interface SupportedKafkaInstanceType {
    /**
     * Unique identifier of the Kafka instance type.
     * @type {string}
     * @memberof SupportedKafkaInstanceType
     */
    'id'?: string;
    /**
     * Human readable name of the supported Kafka instance type
     * @type {string}
     * @memberof SupportedKafkaInstanceType
     */
    'display_name'?: string;
    /**
     *  A list of Kafka instance sizes available for this instance type
     * @type {Array<SupportedKafkaSize>}
     * @memberof SupportedKafkaInstanceType
     */
    'sizes'?: Array<SupportedKafkaSize>;
}

