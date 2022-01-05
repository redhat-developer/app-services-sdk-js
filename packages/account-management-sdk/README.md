## Account Management SDK

> NOTE: This SDK is for internal use only

### Getting Started

#### Install Package

```
npm install @rhoas/account-management-sdk --save
```

#### Usage

```ts
import { Configuration, DefaultApi } from "@rhoas/account-management-sdk";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
  accessToken,
  basePath,
});

const accountApi = new DefaultApi(apiConfig)

```

#### Security

API is using https://sso.redhat.com for OAuth Authentication.
Provided token needs to be AccessToken returned from library like keycloak.js
