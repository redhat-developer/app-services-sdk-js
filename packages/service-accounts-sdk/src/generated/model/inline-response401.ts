/* tslint:disable */
/* eslint-disable */
/**
 * Service Accounts API Documentation
 * This is the API documentation for Service Accounts
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InlineResponse400Cause } from './inline-response400-cause';
import { InlineResponse400CauseStackTrace } from './inline-response400-cause-stack-trace';
import { InlineResponse400CauseSuppressed } from './inline-response400-cause-suppressed';
import { InlineResponse400Response } from './inline-response400-response';

/**
 * 
 * @export
 * @interface InlineResponse401
 */
export interface InlineResponse401 {
    /**
     * 
     * @type {InlineResponse400Cause}
     * @memberof InlineResponse401
     */
    'cause'?: InlineResponse400Cause;
    /**
     * 
     * @type {Array<InlineResponse400CauseStackTrace>}
     * @memberof InlineResponse401
     */
    'stackTrace'?: Array<InlineResponse400CauseStackTrace>;
    /**
     * 
     * @type {InlineResponse400Response}
     * @memberof InlineResponse401
     */
    'response'?: InlineResponse400Response;
    /**
     * 
     * @type {Array<object>}
     * @memberof InlineResponse401
     */
    'challenges'?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse401
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse401
     */
    'localizedMessage'?: string;
    /**
     * 
     * @type {Array<InlineResponse400CauseSuppressed>}
     * @memberof InlineResponse401
     */
    'suppressed'?: Array<InlineResponse400CauseSuppressed>;
}

