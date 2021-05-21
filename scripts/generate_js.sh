#!/usr/bin/env bash
## OPENAPI_FILENAME=yourapi generate_js.sh 

PACKAGE_NAME=`node ./scripts/get-mapped-config.js "$OPENAPI_FILENAME" "packageName"`
FOLDER_NAME=`node ./scripts/get-mapped-config.js "$OPENAPI_FILENAME" "folder"`
OUTPUT_PATH="./packages/$FOLDER_NAME"

echo "Generating package in $OUTPUT_PATH"

npx @openapitools/openapi-generator-cli version-manager set 5.1.1
npx @openapitools/openapi-generator-cli generate -g typescript-axios -i \
    ".openapi/$OPENAPI_FILENAME" -o "$OUTPUT_PATH" \
    --package-name="${PACKAGE_NAME}" \
    --additional-properties="ngVersion=6.1.7,npmName=${PACKAGE_NAME},supportsES6=true,withInterfaces=true" \
    --ignore-file-override=.openapi-generator-ignore
