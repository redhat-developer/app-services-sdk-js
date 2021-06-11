const OpenAPIBackend = require("openapi-backend").default;
const express = require("express");
const kafkaHandlers = require("./handlers/kafka-manager");
const srsHandlers = require("./handlers/registry-manager");
const srsDataHandlers = require("./handlers/registry-data");
const topicHandlers = require("./handlers/kafka-admin");
const ams = require("./handlers/ams");

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
  definition: path.join(__dirname, "../openapi/kafka-admin-rest.yaml"),
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

topicAPI.registerSecurityHandler("Bearer", (c, req, res) => {
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

  if (req.url.startsWith("/api/authorizations/v1/self_terms_review")) {
    console.info("Calling ams");
    return ams.termsReview(req, req, res);
  }

  if (req.url.startsWith("/")) {
    console.info("Front page");
    return res.send(
      "<h1>RHOAS API Mock</h1> <a href='https://github.com/redhat-developer/app-services-sdk-js/tree/main/packages/api-mock'>Documentation</a>"
    );
  }

  res.status(405).status({ err: "Method not allowed" });
});

if (!process.env.CUSTOM_OWNER) {
  process.env.CUSTOM_OWNER = "Missing RESOURCE_OWNER";
}

console.log(
  `All resources will be created as ${process.env.CUSTOM_OWNER} user`
);

api.listen(getPort(), () =>
  console.info(`RHOAS Mock Service API listening at ${getFullHostname()}`)
);
