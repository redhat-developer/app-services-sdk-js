const OpenAPIBackend = require("openapi-backend").default;
const express = require("express");
const kafkaHandlers = require("./handlers/kafka-manager");
const srsHandlers = require("./handlers/registry-manager");
const srsDataHandlers = require("./handlers/registry-data");
const topicHandlers = require("./handlers/kafka-admin");
const { getFullHostname, getPort } = require("./utls/host");

const path = require("path");
var cors = require("cors");

const api = express();
api.use(express.json());
api.use(cors());

// define api
const kafkaAPI = new OpenAPIBackend({
  definition: path.join(__dirname, "../openapi/kas-fleet-manager.yaml"),
});
const srsControlApi = new OpenAPIBackend({
  definition: path.join(__dirname, "../openapi/srs-fleet-manager.yaml"),
});
const topicAPI = new OpenAPIBackend({
  definition: path.join(__dirname, "../openapi/kafka-admin-rest.yml"),
});

const srsDataApi = new OpenAPIBackend({
  definition: path.join(__dirname, "../openapi/registry-instance-rest.yaml"),
});

// register handlers
kafkaAPI.register(kafkaHandlers);
topicAPI.register(topicHandlers);
srsControlApi.register(srsHandlers);
srsDataApi.register(srsDataHandlers);

// register security handler
kafkaAPI.registerSecurityHandler("Bearer", (c, req, res) => {
  return true;
});

srsControlApi.registerSecurityHandler("Bearer", (c, req, res) => {
  return true;
});

// Skipping validation of the schema
// validation fails on this schema definition
// even though it is valid through other validation forms like Swagger.io
topicAPI.validateDefinition = () => {};
srsDataApi.validateDefinition = () => {};
srsControlApi.validateDefinition = () => {};

kafkaAPI.init();
topicAPI.init();
srsControlApi.init();
srsDataApi.init();

api.use((req, res) => {
  if (req.url.startsWith("/api/kafkas_mgmt/v1")) {
    console.info("Calling kafkas manager");
    return kafkaAPI.handleRequest(req, req, res);
  }

  if (req.url.startsWith("/api/serviceregistry_mgmt/v1/registries")) {
    console.info("Calling serviceregistry manager");
    return srsControlApi.handleRequest(req, req, res);
  }

  if (req.url.startsWith("/data/service-registry")) {
    console.info("Calling serviceregistry service");
    req.url = req.url.replace("/data/service-registry", "");
    return srsDataApi.handleRequest(req, req, res);
  }

  if (req.url.startsWith("/data/kafka")) {
    console.info("Calling Kafka Instance Admin");
    req.url = req.url.replace("/data/kafka", "");
    return topicAPI.handleRequest(req, req, res);
  }
  res.status(405).status({ err: "Method not allowed" });
});

api.listen(getPort(), () =>
  console.info(`RHOAS Mock Service API listening at ${getFullHostname()}`)
);
