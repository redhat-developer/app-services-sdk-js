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



/**
 * _OpenID_ identity provider claims.
 * @export
 * @interface OpenIDClaims
 */
export interface OpenIDClaims {
    /**
     * List of claims to use as the mail address.
     * @type {Array<string>}
     * @memberof OpenIDClaims
     */
    'email'?: Array<string>;
    /**
     * List of claims to use as the group name.
     * @type {Array<string>}
     * @memberof OpenIDClaims
     */
    'groups'?: Array<string>;
    /**
     * List of claims to use as the display name.
     * @type {Array<string>}
     * @memberof OpenIDClaims
     */
    'name'?: Array<string>;
    /**
     * List of claims to use as the preferred user name when provisioning a user.
     * @type {Array<string>}
     * @memberof OpenIDClaims
     */
    'preferred_username'?: Array<string>;
}

