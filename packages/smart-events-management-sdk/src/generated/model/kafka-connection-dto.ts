/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift SmartEvents Fleet Manager
 * The API exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface KafkaConnectionDTO
 */
export interface KafkaConnectionDTO {
    /**
     * 
     * @type {string}
     * @memberof KafkaConnectionDTO
     */
    'bootstrapServers'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaConnectionDTO
     */
    'clientId'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaConnectionDTO
     */
    'clientSecret'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaConnectionDTO
     */
    'securityProtocol'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaConnectionDTO
     */
    'topic'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaConnectionDTO
     */
    'errorTopic'?: string;
}

