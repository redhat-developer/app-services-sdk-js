/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConsumerGroup } from './consumer-group';

/**
 * A list of consumer groups
 * @export
 * @interface ConsumerGroupList
 */
export interface ConsumerGroupList {
    /**
     * Consumer group list items
     * @type {Array<ConsumerGroup>}
     * @memberof ConsumerGroupList
     */
    'items'?: Array<ConsumerGroup>;
    /**
     * The total number of consumer groups.
     * @type {number}
     * @memberof ConsumerGroupList
     */
    'total'?: number;
    /**
     * The number of consumer groups per page.
     * @type {number}
     * @memberof ConsumerGroupList
     */
    'size'?: number;
    /**
     * The page
     * @type {number}
     * @memberof ConsumerGroupList
     */
    'page'?: number;
    /**
     * Offset of the topic list
     * @type {number}
     * @memberof ConsumerGroupList
     * @deprecated
     */
    'offset'?: number;
    /**
     * Maximum of returned topics
     * @type {number}
     * @memberof ConsumerGroupList
     * @deprecated
     */
    'limit'?: number;
    /**
     * The total number of consumer groups.
     * @type {number}
     * @memberof ConsumerGroupList
     * @deprecated
     */
    'count'?: number;
}

