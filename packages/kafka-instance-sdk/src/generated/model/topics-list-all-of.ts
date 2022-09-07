/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Instance API
 * API for interacting with Kafka Instance. Includes Produce, Consume and Admin APIs
 *
 * The version of the OpenAPI document: 0.12.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Topic } from './topic';

/**
 * A list of topics.
 * @export
 * @interface TopicsListAllOf
 */
export interface TopicsListAllOf {
    /**
     * 
     * @type {Array<Topic>}
     * @memberof TopicsListAllOf
     */
    'items'?: Array<Topic>;
}
