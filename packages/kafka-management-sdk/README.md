## Kafka Management SDK

RHOAS Kafka Management TypeScript/JavaScript SDK

### Getting Started

#### Install Package

```
npm install @rhoas/kafka-management-sdk --save
```

#### Usage

```ts
import { Configuration, DefaultApi } from "@rhoas/kafka-management-sdk";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
  accessToken,
  basePath,
});

const kafkaApi = new DefaultApi(apiConfig);

kafkaApi
  .listKafkas()
  .then((data) => {
    console.log(data?.data.items);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

See [./examples](https://github.com/redhat-developer/app-services-sdk-js/tree/main/examples) for full example

### Service Accounts SDK

SDK will help you to create Service Account to Access Kafka and other services

> NOTE: This SDK is currently included into Kafka SDK as Alpha feature. It will be moved out of the SDK in near future.

See [./examples](https://github.com/redhat-developer/app-services-sdk-js/tree/main/examples/src/serviceAccount.ts) for full example