const nanoid = require("nanoid").nanoid;
const path = require("path");
const { getFullHostname } = require("../utls/host");
var saList = require("../../_data_/serviceaccounts.json");

const commonKafkaFields = {
  kind: "kafka",
  status: "ready",
  cloud_provider: "aws",
  multi_az: false,
  owner: process.env.RESOURCE_OWNER,
  region: "us-east-1",
  bootstrap_server_host: getFullHostname(),
  created_at: "2020-10-05T12:51:24.053142Z",
  updated_at: "2020-10-05T12:56:36.362208Z",
};

const commonError = {
  id: "103",
  kind: "Error",
  href: "/api/kafkas_mgmt/v1/errors/103",
  code: "KAFKAS-MGMT-103",
  operation_id: "1iWIimqGcrDuL61aUxIZqBTqNRa",
};

const kafkas = {};

function createKafkaHandlers(preSeed) {
  if (preSeed) {
    kafkas['uFYJpM76DaIqVqqgZjtrz'] = {
      id: "uFYJpM76DaIqVqqgZjtrz",
      kind: "kafka",
      href: "/api/kafkas_mgmt/v1/kafkas/1iSY6RQ3JKI8Q0OTmjQFd3ocFRg",
      owner: "api_kafka_user",
      name: "sample-kafka",
      ...commonKafkaFields,
    }
  }
  
  return {
    createKafka: async (c, req, res) => {
      if (!req.body.name) {
        return res.status(400).json({
          reason: "Missing name field",
          ...commonError,
        });
      }
      const newId = nanoid();
      const kafka = {
        id: newId,
        href: "/api/kafkas_mgmt/v1/kafkas/" + newId,
        ...req.body,
        ...commonKafkaFields,
      };
      kafkas[newId] = kafka;
      res.status(202).json(kafka);
    },

    deleteKafkaById: async (c, req, res) => {
      const id = c.request.params.id;
      if (!id || !kafkas[id]) {
        return res.status(400).json({
          reason: "Missing or invalid id field",
          ...commonError,
        });
      }

      const kafka = Object.assign({}, kafkas[id]);
      delete kafkas[id];
      res.status(204).json(kafka);
    },

    getKafkaById: async (c, req, res) => {
      const id = c.request.params.id;
      if (!id || !kafkas[id]) {
        return res.status(400).json({
          reason: "Missing or invalid id field",
          ...commonError,
        });
      }

      res.status(200).json(kafkas[id]);
    },

    getKafkas: async (c, req, res) => {
      return res.status(200).json({
        kind: "KafkaRequestList",
        page: 1,
        size: 50,
        total: kafkas.length,
        items: Object.values(kafkas),
      });
    },

    getCloudProviders: async (_c, _req, res) => {
      return res.status(200).json({
        kind: "CloudProviderList",
        page: 1,
        size: 7,
        total: 7,
        items: [
          {
            kind: "CloudProvider",
            id: "aws",
            display_name: "Amazon Web Services",
            name: "aws",
            enabled: true,
          },
          {
            kind: "CloudProvider",
            id: "azure",
            display_name: "Microsoft Azure",
            name: "azure",
            enabled: false,
          },
        ],
      });
    },

    getCloudProviderRegions: async (_c, _req, res) => {
      return res.status(200).json({
        kind: "CloudRegionList",
        page: 1,
        size: 17,
        total: 17,
        items: [
          {
            kind: "CloudRegion",
            id: "eu-west-2",
            display_name: "EU, London",
            enabled: true,
          },
        ],
      });
    },

    getVersionMetadata: async (c, req, res) =>
      res.status(200).json({
        kind: "APIVersion",
        id: "v1",
        collections: [{ id: "kafkas", kind: "KafkaList" }],
      }),

    createServiceAccount: async (c, req, res) => {
      const clientId = Number.MAX_SAFE_INTEGER - new Date().getTime();
      const clientSecret = Number.MAX_SAFE_INTEGER - new Date().getTime();
      res.status(200).json({
        name: req.body.name,
        description: req.body.description,
        client_id: clientId.toString(),
        client_secret: clientSecret.toString(),
      });
    },

    getServiceAccounts: async (c, req, res) => {
      res.status(200).json(saList);
    },

    getServiceAccountById: async (c, req, res) => {
      res.status(200).json({
        id: "1",
        kind: "ServiceAccount",
        href: "/api/managed-services-api/v1/serviceaccounts/1",
        name: "my-app-sa",
        description: "service account for my app",
        client_id: "SA-121212",
        owner: "test-user",
        created_at: "2021-04-07T16:24:01+05:30",
      });
    },

    deleteServiceAccountById: async (c, req, res) => {
      res.status(200).json({
        id: "1",
        kind: "ServiceAccount",
        href: "/api/managed-services-api/v1/serviceaccounts/1",
        name: "my-app-sa",
        description: "service account for my app",
        client_id: "SA-121212",
        owner: "test-user",
        created_at: "2021-04-07T16:24:01+05:30",
      });
    },

    // Handling auth
    notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
    unauthorizedHandler: async (c, req, res) =>
      res.status(401).json({ err: "unauthorized" }),
  }
}

module.exports = createKafkaHandlers