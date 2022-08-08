## Smart Events Management SDK

RHOAS Clusters Management TypeScript/JavaScript SDK

### Getting Started

#### Install Package

```
npm install @rhoas/clusters-management-sdk --save
```

#### Usage

```ts

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const clustersPI = new DefaultApi(apiConfig) 

```

#### Security

API is using https://sso.redhat.com for OAuth Authentication.
Provided token needs to be AccessToken returned from library like keycloak.js
