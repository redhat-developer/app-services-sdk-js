## Mock for RHOAS APIs

Provide mocking capabilities 
APIs support in memory storage to give you abstraction of running service.

## Using as NPM package

Will start API locally with all endpoints available

```
npx @rhoas/api-mock
```

## Using as Docker

```
docker run quay.io/wtrocki/api-mock
```

## Local development

```
yarn
yarn init-openapi
yarn start # API running at http://localhost:9000
```

## Environment variables

CUSTOM_PORT - custom port number used default is 8000
CUSTOM_HOST - custom url used in returned data. default http://localhost
RESOURCE_OWNER - provide custom owner value as we do not have ability to detect it in mock. For example: `RESOURCE_OWNER=wtrocki_kafka_devexp yarn start`

TODO - provide arguments in CLI to override those values

## Build container

```
docker build -t quay.io/wtrocki/api-mock .
docker push quay.io/wtrocki/api-mock
```

## API Clients

You can call api by starting individual web clients per api

```
yarn api:kafka-management
yarn api:kafka-instance
yarn api:registry-management
yarn api:registry-instance
```
