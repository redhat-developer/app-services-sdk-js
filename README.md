# RHOAS SDK for Typescript and JavaScript

Typescript and JavaScript packages and API clients for RHOAS services

## Prequisites

- [NodeJS 14.x lts](https://nodejs.org/en/about/releases/) or above

## Introduction

RHOAS TypeScript SDK's are delivered as set of the individual npm packages.
SDK's are divided into two types:

- **Management SDKs** - support creating services
- **Instance SDKs** -  support interaction with services (limited to capabilities not supported by upstream tools)

Typically developers need to integrate with Management SDK's to create or manage service instances 
and later use upstream libraries or management SDK's to interact with services.

You can view all SDK packages directly in [npm](https://www.npmjs.com/search?q=keywords:rhoas)

## Management SDK's

| Name             | Package name                        | Status | Version            | NPM                 | Docs                |
| ---------------- | :---------------------------------- | :----- | ------------------ | ------------------- | ------------------- |
| kafka            | **@rhoas/kafka-management-sdk**     | beta   | ![kafkashield]     | [npm][kafkanpm]     | [doc][kafkagit]     |
| service-accounts            | **@rhoas/service-accounts-sdk**     | alpha   | ![sashield]     | [npm][sanpm]     | [doc][sagit]     
| connector        | **@rhoas/connector-management-sdk** | alpha  | ![connectorshield] | [npm][connectornpm] | [doc][connectorgit] |
| service registry | **@rhoas/registry-management-sdk**  | alpha  | ![registryshield]  | [npm][registrynpm]  | [doc][registrygit]  |
| smart events | **@rhoas/smart-events-management-sdk**  | alpha  | ![smarteventsshield]| [npm][smarteventsnpm]  | [doc][smarteventsgit] |


## Instances SDK's

| Name             | Package name                     | Status | Version             | NPM                 | Docs                |
| ---------------- | :------------------------------- | :----- | ------------------- | ------------------- | ------------------- |
| kafka            | **@rhoas/kafka-instance-sdk**    | beta   | ![kinstanceshield]  | [npm][kinstancenpm] | [doc][kinstancegit] |
| service registry | **@rhoas/registry-instance-sdk** | beta   | ![srinstanceshield] | [npm][srinstancenpm]| [doc][srinstancegit]|

## Docs

[Documentation](./docs) 

## Examples

[Examples](./examples) 


## Contributing

Contributions are welcome. See [CONTRIBUTING](CONTRIBUTING.md) for details.

### Using API Mock

![](https://img.shields.io/npm/v/@rhoas/api-mock)

Every SDK provided by RHOAS has available API mock.
Mock provides simulation of  **in memory** implementation of APIs that 
can be used for development and testing.


1. Inline install and usage
```
npx @rhoas/api-mock
```

2. Container image

```
docker run  -p 8080:8000 quay.io/rhosak/api-mock
```

3. Using as CLI

```
npm install -g @rhoas/api-mock
## Run CLI
asapi
```

[kafkagit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/kafka-management-sdk 
[kafkanpm]: https://www.npmjs.com/package/@rhoas/kafka-management-sdk
[kafkashield]: https://img.shields.io/npm/v/@rhoas/kafka-management-sdk
[sagit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/service-accounts-sdk 
[sanpm]: https://www.npmjs.com/package/@rhoas/service-accounts-sdk
[sashield]: https://img.shields.io/npm/v/@rhoas/service-accounts-sdk
[kinstancegit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/kafka-instance-sdk 
[kinstancenpm]: https://www.npmjs.com/package/@rhoas/kafka-instance-sdk
[kinstanceshield]: https://img.shields.io/npm/v/@rhoas/kafka-instance-sdk
[srinstancegit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/registry-instance-sdk 
[srinstancenpm]: https://www.npmjs.com/package/@rhoas/registry-instance-sdk
[srinstanceshield]: https://img.shields.io/npm/v/@rhoas/registry-instance-sdk
[registrygit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/registry-management-sdk 
[registrynpm]: https://www.npmjs.com/package/@rhoas/registry-management-sdk
[registryshield]: https://img.shields.io/npm/v/@rhoas/registry-management-sdk
[connectorgit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/connector-management-sdk 
[connectornpm]: https://www.npmjs.com/package/@rhoas/connector-management-sdk
[connectorshield]: https://img.shields.io/npm/v/@rhoas/connector-management-sdk
[smarteventsgit]: https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/smart-events-management-sdk 
[smarteventsnpm]: https://www.npmjs.com/package/@rhoas/smart-events-management-sdk
[smarteventsshield]: https://img.shields.io/npm/v/@rhoas/smart-events-management-sdk
