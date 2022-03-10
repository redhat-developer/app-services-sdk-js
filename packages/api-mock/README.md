## Mock for RHOAS APIs

Provide mocking capabilities 
APIs support in memory storage to give you abstraction of running service.

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

Starting mock with sample data present:

```shell
asapi --pre-seed
```

### Instances API mapping pattern

Mock provides instances (data) API mock as well as the control planes.
Each instance API uses `/data/kafka` or `/data/service-registry` prefixes to not conflict with other apis.

## Local development

```
yarn
yarn build
yarn start # API running at http://localhost:9000
```

## Environment variables

CUSTOM_PORT - custom port number used default is 8000
CUSTOM_HOST - custom url used in returned data. default http://localhost
RESOURCE_OWNER - provide custom owner value as we do not have ability to detect it in mock. For example: `RESOURCE_OWNER=wtrocki_kafka_devexp yarn start`

## Build container

```
docker build -t quay.io/rhosak/api-mock .
docker push quay.io/rhosak/api-mock
```

## API Clients

You can call api by starting individual web clients per api

```
yarn api:kafka-management
yarn api:kafka-instance
yarn api:registry-management
yarn api:registry-instance
```
