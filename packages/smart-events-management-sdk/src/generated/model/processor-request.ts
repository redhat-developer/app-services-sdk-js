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


import { Action } from './action';
import { BaseFilter } from './base-filter';
import { Source } from './source';

/**
 * 
 * @export
 * @interface ProcessorRequest
 */
export interface ProcessorRequest {
    /**
     * 
     * @type {string}
     * @memberof ProcessorRequest
     */
    'name': string;
    /**
     * 
     * @type {Set<BaseFilter>}
     * @memberof ProcessorRequest
     */
    'filters'?: Set<BaseFilter>;
    /**
     * 
     * @type {string}
     * @memberof ProcessorRequest
     */
    'transformationTemplate'?: string;
    /**
     * 
     * @type {Action}
     * @memberof ProcessorRequest
     */
    'action'?: Action;
    /**
     * 
     * @type {Source}
     * @memberof ProcessorRequest
     */
    'source'?: Source;
}

