## Kafka Instance Admin SDK

RHOAS Kafka Instance Admin SDK TypeScript/JavaScript SDK
Provides SDK for interacting with Kafka instances 

> NOTE: This SDK requires different authentication than management APIs

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

