# RHOAS SDK for Typescript and JavaScript

Typescript and JavaScript packages and API clients for RHOAS services

> NOTE: SDK is under active development

## Prequisites

- [NodeJS 14.x lts](https://nodejs.org/en/about/releases/) or above

## Supported APIs

| Package name                     | Status   |   Version         | NPM                 | Docs               |
|----------------------------------|----------|-------------------|---------------------|--------------------|
| **@rhoas/kafka-management-sdk**    | beta   | ![kafkashield]    | [npm][kafkanpm]     | [doc][kafkagit]    |
| **@rhoas/registry-management-sdk** | alpha  | ![registryshield] | [npm][registrynpm]  | [doc][registrygit] |

## API stability

**Alpha**: the API is still being developed and may have backwards-incompatible changes. It is not recommended for production use.

**Beta**: the API is mostly complete and stable, but still has outstanding features to be addressed. There may be minor backwards-incomptable changes.

**Stable**: the API is ready for production use.

## Examples

[./examples](https://github.com/redhat-developer/app-services-sdk-js/tree/main/examples) 

## Contributing

Contributions are welcome. See [CONTRIBUTING](CONTRIBUTING.md) for details.

[kafkagit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/kafka-management-sdk 
[kafkanpm]: https://www.npmjs.com/package/@rhoas/kafka-management-sdk
[registrygit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/kafka-management-sdk 
[registrynpm]: https://www.npmjs.com/package/@rhoas/kafka-management-sdk
[kafkashield]: https://img.shields.io/npm/v/@rhoas/kafka-management-sdk
[registryshield]: https://img.shields.io/npm/v/@rhoas/registry-management-sdk