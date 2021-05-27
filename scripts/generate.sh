#!/usr/bin/env bash
## OPENAPI_FILENAME=yourapi generate_js.sh 

npx @openapitools/openapi-generator-cli version-manager set 5.1.1
echo "Generating SDKs"

OPENAPI_FILENAME=".openapi/kas-fleet-manager.yaml"
PACKAGE_NAME="@rhoas/kafka-management-sdk"
OUTPUT_PATH="packages/kafka-management-sdk/src/generated"

echo "Generating based on ${OPENAPI_FILENAME}"

rm -Rf $OUTPUT_PATH/model $OUTPUT_PATH/api

npx @openapitools/openapi-generator-cli generate -g typescript-axios -i \
    "$OPENAPI_FILENAME" -o "$OUTPUT_PATH" \
    --package-name="${PACKAGE_NAME}" \
    --additional-properties="ngVersion=6.1.7,npmName=${PACKAGE_NAME},supportsES6=true,withInterfaces=true,withSeparateModelsAndApi=true,modelPackage=model,apiPackage=api " \
    --ignore-file-override=.openapi-generator-ignore

# OPENAPI_FILENAME=".openapi/kafka-admin.yml"
# PACKAGE_NAME="@rhoas/kafka-admin-sdk"
# OUTPUT_PATH="packages/kafka-admin-sdk/src/generated"

# echo "Generating based on ${OPENAPI_FILENAME}"

# npx @openapitools/openapi-generator-cli generate -g typescript-axios -i \
#     "$OPENAPI_FILENAME" -o "$OUTPUT_PATH" \
#     --package-name="${PACKAGE_NAME}" \
#     --additional-properties="ngVersion=6.1.7,npmName=${PACKAGE_NAME},supportsES6=true,withInterfaces=true" \
#     --ignore-file-override=.openapi-generator-ignore

# OPENAPI_FILENAME=".openapi/srs-fleet-manager.json"
# PACKAGE_NAME="@rhoas/registry-management-sdk"
# OUTPUT_PATH="packages/registry-management-sdk/src/generated"

# echo "Generating based on ${OPENAPI_FILENAME}"

# npx @openapitools/openapi-generator-cli generate -g typescript-axios -i \
#     "$OPENAPI_FILENAME" -o "$OUTPUT_PATH" \
#     --package-name="${PACKAGE_NAME}" \
#     --additional-properties="ngVersion=6.1.7,npmName=${PACKAGE_NAME},supportsES6=true,withInterfaces=true" \
#     --ignore-file-override=.openapi-generator-ignore





