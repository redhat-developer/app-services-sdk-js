/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift SmartEvents Fleet Manager V2
 * The API exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SourceConnectorResponse } from './source-connector-response';

/**
 * 
 * @export
 * @interface SourceConnectorListResponse
 */
export interface SourceConnectorListResponse {
    /**
     * 
     * @type {string}
     * @memberof SourceConnectorListResponse
     */
    'kind': string;
    /**
     * 
     * @type {Array<SourceConnectorResponse>}
     * @memberof SourceConnectorListResponse
     */
    'items'?: Array<SourceConnectorResponse>;
    /**
     * 
     * @type {number}
     * @memberof SourceConnectorListResponse
     */
    'page': number;
    /**
     * 
     * @type {number}
     * @memberof SourceConnectorListResponse
     */
    'size': number;
    /**
     * 
     * @type {number}
     * @memberof SourceConnectorListResponse
     */
    'total': number;
}

