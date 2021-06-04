## RHOAS SDK Examples

### Running Examples

1. Obtain Access Token from sso.redhat.com and set `CLOUD_API_TOKEN` env variable 

2. Execute example

```bash
CLOUD_API_TOKEN=token npx ts-node ./src/kafka.ts
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

With [RHOAS CLI](https://github.com/redhat-developer/app-services-cli)
```
## Refresh token
rhoas kafka list 
## Fetch token
cat ~/.rhoascli.json | jq .access_token
```

In the cloud.redhat.com UI:
```
window.insights.chrome.auth.getToken()
```

