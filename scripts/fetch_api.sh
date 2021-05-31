#!/usr/bin/env bash

# get the download URL of the OpenAPI spec file
OPENAPI_FILE_URL=`echo $CLIENT_PAYLOAD | jq .download`

# download the OpenAPI file
curl -H "Authorization: token $BF2_TOKEN" "$OPENAPI_FILE_URL"
if [ $? != 0 ]; then
  exit $?
fi


