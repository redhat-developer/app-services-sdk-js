/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.11.1
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
    Read: 'READ',
    Write: 'WRITE',
    Create: 'CREATE',
    Delete: 'DELETE',
    Alter: 'ALTER',
    Describe: 'DESCRIBE',
    DescribeConfigs: 'DESCRIBE_CONFIGS',
    AlterConfigs: 'ALTER_CONFIGS',
    Any: 'ANY'
} as const;

export type AclOperationFilter = typeof AclOperationFilter[keyof typeof AclOperationFilter];



