#!/usr/bin/env bash

# get the download URL of the OpenAPI spec file
OPENAPI_FILE_URL=$(node $(dirname $0)/get-raw-openapi-url.js "$GITHUB_REPO" "$BRANCH" "$OPENAPI_DIRECTORY" "$OPENAPI_FILENAME")

# download the OpenAPI file
curl -H "Authorization: token $BF2_TOKEN" "$OPENAPI_FILE_URL" -o "$OPENAPI_FILENAME"
if [ $? != 0 ]; then
  exit $?
fi
