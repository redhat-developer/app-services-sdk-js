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

export const AclOperationFilter = {
    All: 'ALL',
    Alter: 'ALTER',
    AlterConfigs: 'ALTER_CONFIGS',
    Any: 'ANY',
    Create: 'CREATE',
    Delete: 'DELETE',
    Describe: 'DESCRIBE',
    DescribeConfigs: 'DESCRIBE_CONFIGS',
    Read: 'READ',
    Write: 'WRITE'
} as const;

export type AclOperationFilter = typeof AclOperationFilter[keyof typeof AclOperationFilter];



