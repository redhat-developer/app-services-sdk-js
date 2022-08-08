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


import { Product } from './product';

/**
 * 
 * @export
 * @interface InlineResponse20033
 */
export interface InlineResponse20033 {
    /**
     * Retrieved list of products.
     * @type {Array<Product>}
     * @memberof InlineResponse20033
     */
    'items'?: Array<Product>;
    /**
     * Index of the requested page, where one corresponds to the first page.
     * @type {number}
     * @memberof InlineResponse20033
     */
    'page'?: number;
    /**
     * Maximum number of items that will be contained in the returned page.
     * @type {number}
     * @memberof InlineResponse20033
     */
    'size'?: number;
    /**
     * Total number of items of the collection that match the search criteria, regardless of the size of the page.
     * @type {number}
     * @memberof InlineResponse20033
     */
    'total'?: number;
}

