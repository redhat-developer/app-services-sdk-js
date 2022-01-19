## Connector Management SDK

RHOAS Connector Management TypeScript/JavaScript SDK

### Getting Started

#### Install Package

```
npm install @rhoas/connector-management-sdk --save
```

#### Usage

```ts
import { Configuration, ConnectorsApi, getErrorCode, isServiceApiError, APIErrorCodes } from "@rhoas/connector-management-sdk";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const connectorsApi = new ConnectorsApi(apiConfig)

connectorsApi.getConnector("id", "kafka-id").then((data) => {
    console.log(data?.data)
}).catch((err) => {
    if(isServiceApiError(err)){
        console.error("Validation issue", getErrorCode(err) == APIErrorCodes.ERROR_8)
    }
})
```


See [./examples](https://github.com/redhat-developer/app-services-sdk-js/tree/main/examples) for full example
