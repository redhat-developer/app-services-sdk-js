


module.exports ={
    kafka: {
        definition: require("./errors_kafka_mgmt.json"),
        file: "packages/kafka-management-sdk/src/errors.ts"
    },
    srs:  {
        definition: require("./errors_srs_mgmt.json"),
        file: "packages/registry-management-sdk/src/errors.ts"
    },
    connector: {
        definition: require("./errors_connector_mgmt.json"),
        file: "packages/connector-management-sdk/src/errors.ts"
    }, 
    kafkainstance: {
        definition: require("./errors_kafka_instance.json"),
        file: "packages/kafka-instance-sdk/src/errors.ts"
    }, 
}

