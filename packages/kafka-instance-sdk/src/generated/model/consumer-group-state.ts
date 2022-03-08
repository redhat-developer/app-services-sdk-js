/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.7.1-SNAPSHOT
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

export const ConsumerGroupState = {
    Unknown: 'UNKNOWN',
    PreparingRebalance: 'PREPARING_REBALANCE',
    CompletingRebalance: 'COMPLETING_REBALANCE',
    Stable: 'STABLE',
    Dead: 'DEAD',
    Empty: 'EMPTY'
} as const;

export type ConsumerGroupState = typeof ConsumerGroupState[keyof typeof ConsumerGroupState];



