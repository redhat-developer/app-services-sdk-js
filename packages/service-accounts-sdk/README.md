## Service Accounts SDK

RHOAS Service Accounts TypeScript/JavaScript SDK.

Service accounts are a special type of non-human privileged account used to execute applications and run automated services. Service accounts typically will allow you to connect to the services from your applications.

> NOTE: Creation of the service account doesn't automatically gives developers priviledge to 
use it with the service. Please refer to individual service API to see how to add permissions. 
For example for kafka-instance-sdk check "access-management" APIs.

### Getting Started

#### Install Package

```
npm install @rhoas/service-accounts-sdk --save
```

#### Usage

```ts
import { Configuration, DefaultApi} from "@rhoas/service-accounts-sdk";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://sso.redhat.com/auth/realms/redhat-external/";

const apiConfig = new Configuration({
  accessToken,
  basePath,
});

const serviceAccountAPI = new ServiceAccountsApi(apiConfig)

serviceAccountAPI.getServiceAccounts().then((data) => {
    console.log(data?.data)
}).catch((err) => {
    console.error(err.message)
})
```

See [./examples](https://github.com/redhat-developer/app-services-sdk-js/tree/main/examples) for full example

#### Security

API is using https://sso.redhat.com for OAuth Authentication.
Provided token needs to be AccessToken returned from library like keycloak.js
