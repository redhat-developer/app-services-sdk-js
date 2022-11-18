#!/usr/bin/env bash
## OPENAPI_FILENAME=yourapi generate.sh 

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
    
    generate_command_params=()
    generate_command_params+=(--package-name="${package_name}")
    generate_command_params+=(--additional-properties=$additional_properties)
    generate_command_params+=(--ignore-file-override=.openapi-generator-ignore)
    [[ "$file_name" == *"smartevents"* ]] && generate_command_params+=(--remove-operation-id-prefix)

    npx @openapitools/openapi-generator-cli generate -g typescript-axios -i \
    "$file_name" -o "$output_path" "${generate_command_params[@]}"
}

npx @openapitools/openapi-generator-cli version-manager set 5.4.0
echo "Generating SDKs"
additional_properties="ngVersion=6.1.7,npmName=${PACKAGE_NAME},supportsES6=true,withInterfaces=true,withSeparateModelsAndApi=true,modelPackage=model,apiPackage=api"

OPENAPI_FILENAME=".openapi/kas-fleet-manager.yaml"
PACKAGE_NAME="@rhoas/kafka-management-sdk"
OUTPUT_PATH="packages/kafka-management-sdk/src/generated"

generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

OPENAPI_FILENAME=".openapi/srs-fleet-manager.json"
PACKAGE_NAME="@rhoas/registry-management-sdk"
OUTPUT_PATH="packages/registry-management-sdk/src/generated"

generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

OPENAPI_FILENAME=".openapi/connector_mgmt.yaml"
PACKAGE_NAME="@rhoas/connector-management-sdk"
OUTPUT_PATH="packages/connector-management-sdk/src/generated"

generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

OPENAPI_FILENAME=".openapi/kafka-admin-rest.yaml"
PACKAGE_NAME="@rhoas/kafka-instance-sdk"
OUTPUT_PATH="packages/kafka-instance-sdk/src/generated"

generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

OPENAPI_FILENAME=".openapi/ams.json"
PATCH_FILE=".openapi/ams.patch" 
PACKAGE_NAME="@rhoas/account-management-sdk"
OUTPUT_PATH="packages/account-management-sdk/src/generated"

patch $OPENAPI_FILENAME < $PATCH_FILE

npx @openapitools/openapi-generator-cli generate -g typescript-axios -i \
    "$OPENAPI_FILENAME" -o "$OUTPUT_PATH" \
    --package-name="${PACKAGE_NAME}" \
    --additional-properties=$additional_properties \
    --ignore-file-override=./packages/account-management-sdk/.openapi-generator-ignore 

git checkout -- $OPENAPI_FILENAME


echo "generating registry instance SDK "

cd .openapi
echo "Removing codegen "
cat registry-instance.json | jq 'del(.paths."x-codegen-contextRoot")' > registry-instance-tmp.json
mv -f registry-instance-tmp.json registry-instance.json

echo "Ensuring only single tag is created "
cat registry-instance.json | jq 'walk( if type == "object" and has("tags") 
       then .tags |= select(.[0])
       else . end )' > registry-instance-tmp.json
mv -f registry-instance-tmp.json registry-instance.json

echo "Removing invalid datetime definitions"
sed -i '' 's/date-time/utc-date/' registry-instance.json

cd ..

OPENAPI_FILENAME=".openapi/registry-instance.json"
PACKAGE_NAME="@rhoas/registry-instance-sdk"
OUTPUT_PATH="packages/registry-instance-sdk/src/generated"

generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME


OPENAPI_FILENAME=".openapi/service-accounts.yaml"
PACKAGE_NAME="@rhoas/service-accounts-sdk"
OUTPUT_PATH="packages/service-accounts-sdk/src/generated"

generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME

OPENAPI_FILENAME=".openapi/smartevents_mgmt_v2.yaml"
PACKAGE_NAME="@rhoas/smart-events-management-sdk"
OUTPUT_PATH="packages/smart-events-management-sdk/src/generated"

generate_sdk $OPENAPI_FILENAME $OUTPUT_PATH $PACKAGE_NAME


