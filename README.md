# RHOAS SDK for Typescript and JavaScript

Typescript and JavaScript packages and API clients for RHOAS services

> NOTE: SDK is under active development

## Prequisites

- [NodeJS 14.x lts](https://nodejs.org/en/about/releases/) or above

## Supported APIs

| Package name                    | Status | Version                             | NPM                                           | Docs                                               |
|---------------------------------|--------|-------------------------------------|-----------------------------------------------|----------------------------------------------------|
| @rhoas/kafka-management-sdk     | beta   | ![kafkashield]([kafkashield])       | [link]([npmroot]/@rhoas/kafka-management-sdk) | [Doc]([gitroot]/kafka-management-sdk)              |
| @rhoas/registry-management-sdk  | alpha  | ![registryshield]([registryshield]) | [link]([npmroot]/@rhoas/kafka-management-sdk) | [Doc]([gitroot]/registry-management-sdk)           |

## API stability

**Alpha**: the API is still being developed and may have backwards-incompatible changes. It is not recommended for production use.

**Beta**: the API is mostly complete and stable, but still has outstanding features to be addressed. There may be minor backwards-incomptable changes.

**Stable**: the API is ready for production use.

## Examples

[./examples](https://github.com/redhat-developer/app-services-sdk-js/tree/main/examples) 

## Contributing

Contributions are welcome. See [CONTRIBUTING](CONTRIBUTING.md) for details.

[gitroot]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages
[npmroot]: https://www.npmjs.com/package/
[kafkashield]: https://img.shields.io/npm/v/@rhoas/kafka-management-sdk
[registryshield]: https://img.shields.io/npm/v/@rhoas/registry-management-sdk