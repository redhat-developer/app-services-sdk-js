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
yarn prepare
yarn start # API running at http://localhost:9000
```

## Environment variables

CUSTOM_PORT - custom port number used default is 8000
CUSTOM_HOST - custom url used in returned data. default http://localhost

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
