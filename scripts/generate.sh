#!/usr/bin/env bash
## OPENAPI_FILENAME=yourapi generate_js.sh 

# generate an API client for a service
generate_sdk() {
    local file_name=$1
    local output_path=$2
    local package_name=$3
     
    echo "Validating OpenAPI ${file_name}"
    npx @openapitools/openapi-generator-cli validate -i "$file_name"

    echo "Generating source code based on ${file_name}"

    # remove old generated models
    rm -Rf $OUTPUT_PATH/model $OUTPUT_PATH/api
    
    npx @openapitools/openapi-generator-cli generate -g typescript-axios -i \
    "$file_name" -o "$output_path" \
    --package-name="${package_name}" \
    --additional-properties=$additional_properties \
    --ignore-file-override=.openapi-generator-ignore
}

npx @openapitools/openapi-generator-cli version-manager set 5.2.0
echo "Generating SDKs"
additional_properties="ngVersion=6.1.7,npmName=${PACKAGE_NAME},supportsES6=true,withInterfaces=true,withSeparateModelsAndApi=true,modelPackage=model,apiPackage=api"

# OPENAPI_FILENAME=".openapi/kas-fleet-manager.yaml"
# PACKAGE_NAME="@rhoas/kafka-management-sdk"
# OUTPUT_PATH="packages/kafka-management-sdk/src/generated"

# generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

# OPENAPI_FILENAME=".openapi/srs-fleet-manager.json"
# PACKAGE_NAME="@rhoas/registry-management-sdk"
# OUTPUT_PATH="packages/registry-management-sdk/src/generated"

# generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

# OPENAPI_FILENAME=".openapi/connector_mgmt.yaml"
# PACKAGE_NAME="@rhoas/connector-management-sdk"
# OUTPUT_PATH="packages/connector-management-sdk/src/generated"

# generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

# OPENAPI_FILENAME=".openapi/kafka-admin-rest.yaml"
# PACKAGE_NAME="@rhoas/kafka-instance-sdk"
# OUTPUT_PATH="packages/kafka-instance-sdk/src/generated"

# generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

OPENAPI_FILENAME=".openapi/ams.yaml"
PATCH_FILE=".openapi/ams.patch" 
PACKAGE_NAME="@rhoas/account-management-sdk"
OUTPUT_PATH="packages/account-management-sdk/src/generated"

patch $OPENAPI_FILENAME < $PATCH_FILE
generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME