## RHOAS SDK Examples

### Running Examples

1. Obtain Access Token from sso.redhat.com and set `CLOUD_API_TOKEN` env variable 
2. Build examples and source code in root of the repository
`cd .. && yarn build` or `cd .. && npm run build`
2. Execute one of the examples

```bash
CLOUD_API_TOKEN=token yarn kafka
```

3. Example should print out JSON response from api
```json
[
  {
    "bootstrapServerHost": "xxx.kafka.rhcloud.com:443",
    "cloud_provider": "aws",
    "created_at": "2021-05-26T07:39:46.984051Z",
    "href": "/api/kafkas_mgmt/v1/kafkas/xxx",
    "id": "xxx",
    "kind": "Kafka",
    "multi_az": true,
    "name": "xxx",
    "owner": "xxx"
  }
]
```

## How to obtain Access Token

1. With [RHOAS CLI](https://github.com/redhat-developer/app-services-cli)
```bash
## Refresh token
rhoas kafka list 
## Fetch token
CLOUD_API_TOKEN=`cat ~/.rhoascli.json | jq .access_token`
```

2. While in the the cloud.redhat.com UI, open the website tools/elements page (usually accessible by pressing the f12 key) and type in the following line of code:
```js
window.insights.chrome.auth.getToken().then(console.log)
```

