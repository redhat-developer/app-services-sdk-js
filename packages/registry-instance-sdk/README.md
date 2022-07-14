## Service Registry Instance SDK

Service Registry (Apicurio Registry) instance SDK

> NOTE: This SDK requires different authentication than management APIs

> NOTE: SDK is designed to work with Managed version of APIcurio Registry but it can be also consumed upstream

### Getting Started

#### Install Package

```
npm install @rhoas/registry-instance-sdk --save
```

#### Usage

```ts
import { Configuration, DefaultApi } from "@rhoas/registry-instance-sdk";

const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
  basePath,
});

const instance = new DefaultApi(apiConfig)

instance.getArtifacts().then((data) => {
    console.log(data?.data)
}).catch((err) => {
    console.error(err.message)
})
```
