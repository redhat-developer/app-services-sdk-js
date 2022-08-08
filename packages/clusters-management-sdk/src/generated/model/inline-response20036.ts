/* tslint:disable */
/* eslint-disable */
/**
 * clusters_mgmt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: ocm-feedback@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Version } from './version';

/**
 * 
 * @export
 * @interface InlineResponse20036
 */
export interface InlineResponse20036 {
    /**
     * Retrieved list of versions.
     * @type {Array<Version>}
     * @memberof InlineResponse20036
     */
    'items'?: Array<Version>;
    /**
     * Index of the requested page, where one corresponds to the first page.
     * @type {number}
     * @memberof InlineResponse20036
     */
    'page'?: number;
    /**
     * Maximum number of items that will be contained in the returned page.  Default value is `100`.
     * @type {number}
     * @memberof InlineResponse20036
     */
    'size'?: number;
    /**
     * Total number of items of the collection that match the search criteria, regardless of the size of the page.
     * @type {number}
     * @memberof InlineResponse20036
     */
    'total'?: number;
}

