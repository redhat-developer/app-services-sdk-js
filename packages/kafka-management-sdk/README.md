## @rhoas/kafka-manager-sdk

RHOAS Kafka Management TypeScript/JavaScript SDk that utilizes [axios](https://github.com/axios/axios).
The Node module can be used in the following environments:

Environment

- Node.js
- Webpack
- Browserify

Language level

- ES5 - you must have a Promises/A+ library installed
- ES6

Module system

- CommonJS
- ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Getting Started

Navigate to the folder of your consuming project and run one of the following commands.

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

#### Security

API is using https://sso.redhat.com for OAuth Authentication.
Provided token needs to be AccessToken returned from library like keycloak.js
