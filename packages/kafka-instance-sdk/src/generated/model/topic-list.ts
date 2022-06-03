/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.11.0
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
 * @interface TopicList
 */
export interface TopicList {
    /**
     * 
     * @type {Array<Topic>}
     * @memberof TopicList
     */
    'items'?: Array<Topic>;
}

