const nanoid = require("nanoid").nanoid;
const path = require("path");
const { getFullHostname } = require("../utls/host");
var saList = require("../../_data_/serviceaccounts.json");

const cloudProviders = require("../../_data_/cloudProviders.json");
var providers = cloudProviders.map(cloudProvider => cloudProvider.id)

const commonKafkaFields = {
  kind: "Kafka",
  status: "ready",
  cloud_provider: "aws",
  multi_az: false,
  owner: process.env.RESOURCE_OWNER,
  region: "us-east-1",
  bootstrap_server_host: getFullHostname(),
  created_at: "2020-10-05T12:51:24.053142Z",
  updated_at: "2020-10-05T12:56:36.362208Z",
  marketplace: "standard",
  admin_api_server_url: "http://" + getFullHostname() + "/data/kafka",
  browser_url: "http://localhost:8080/calbu9ccff6bdd4jsg30/dashboard",
  billing_cloud_account_id: "123456789012",
  egress_throughput_per_sec: "1Mi",
  expires_at: "2022-06-18T05:27:01.816619Z",
  ingress_throughput_per_sec: "1Mi",
  instance_type: "developer",
  instance_type_name: "Trial",
  kafka_storage_size: "10Gi",
  max_connection_attempts_per_sec: 50,
  max_data_retention_period: "P14D",
  max_partitions: 100,
  reauthentication_enabled: true,
  size_id: "x1",
  total_max_connections: 100,
  version: "3.0.1"
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

      let cloudProvider = req.body.cloud_provider || commonKafkaFields.cloud_provider

      if (!providers.includes(cloudProvider)) {
        return res.status(400).json({
          reason: `provider ${req.body.cloud_provider} is not supported, supported providers are: ${providers.join(", ")}`,
          ...commonError,
        });
      }

      if (Object.keys(kafkas).map(key => kafkas[key].name).includes(req.body.name)) {
        return res.status(409).json({
          reason: "The resource already exists",
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
      kafka["cloud_provider"] = cloudProvider;
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
      if (!id) {
        return res.status(400).json({
          reason: "Missing or invalid id field",
          ...commonError,
        });
      }

      if (!kafkas[id]) {
        return res.status(404).json({
          reason: "not found",
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
        items: cloudProviders,
      });
    },

    getCloudProviderRegions: async (_c, _req, res) => {
      return res.status(200).json({
        "kind": "CloudRegionList",
        "page": 1,
        "size": 24,
        "total": 24,
        "items": [
          {
            "kind": "CloudRegion",
            "id": "af-south-1",
            "display_name": "Africa (Cape Town)",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ap-east-1",
            "display_name": "Asia Pacific (Hong Kong)",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ap-northeast-1",
            "display_name": "Asia Pacific, Tokyo",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ap-northeast-2",
            "display_name": "Asia Pacific, Seoul",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ap-northeast-3",
            "display_name": "Asia Pacific (Osaka)",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ap-south-1",
            "display_name": "Asia Pacific, Mumbai",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ap-southeast-1",
            "display_name": "Asia Pacific, Singapore",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ap-southeast-2",
            "display_name": "Asia Pacific, Sydney",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ap-southeast-3",
            "display_name": "Asia Pacific, Jakarta",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "ca-central-1",
            "display_name": "Canada, Central",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "eu-central-1",
            "display_name": "EU, Frankfurt",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "eu-north-1",
            "display_name": "EU, Stockholm",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "eu-south-1",
            "display_name": "Europe (Milan)",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "eu-west-1",
            "display_name": "EU, Ireland",
            "enabled": true,
            "supported_instance_types": [
              "standard"
            ],
            "capacity": [
              {
                "instance_type": "standard",
                "available_sizes": [
                  "x1",
                  "x2"
                ]
              }
            ]
          },
          {
            "kind": "CloudRegion",
            "id": "eu-west-2",
            "display_name": "EU, London",
            "enabled": true,
            "supported_instance_types": [
              "standard",
              "developer"
            ],
            "capacity": [
              {
                "instance_type": "standard",
                "available_sizes": [
                  "x1",
                  "x2"
                ]
              },
              {
                "instance_type": "developer",
                "available_sizes": [
                  "x1"
                ]
              }
            ]
          },
          {
            "kind": "CloudRegion",
            "id": "eu-west-3",
            "display_name": "EU, Paris",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "me-south-1",
            "display_name": "Middle East, Bahrain",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "sa-east-1",
            "display_name": "South America, São Paulo",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "us-east-1",
            "display_name": "US East, N. Virginia",
            "enabled": true,
            "supported_instance_types": [
              "standard",
              "developer"
            ],
            "capacity": [
              {
                "instance_type": "standard",
                "available_sizes": [
                  "x1",
                  "x2"
                ]
              },
              {
                "instance_type": "developer",
                "available_sizes": [
                  "x1"
                ]
              }
            ]
          },
          {
            "kind": "CloudRegion",
            "id": "us-east-2",
            "display_name": "US East, Ohio",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "us-gov-east-1",
            "display_name": "AWS GovCloud, US-East",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "us-gov-west-1",
            "display_name": "AWS GovCloud, US-West",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "us-west-1",
            "display_name": "US West, N. California",
            "enabled": false,
            "capacity": []
          },
          {
            "kind": "CloudRegion",
            "id": "us-west-2",
            "display_name": "US West, Oregon",
            "enabled": false,
            "capacity": []
          }
        ]
      });
    },
    getInstanceTypesByCloudProviderAndRegion: async (c, req, res) => {
      res.status(200).json({
        "instance_types": [
          {
            "id": "developer",
            "display_name": "Trial",
            "sizes": [
              {
                "id": "x1",
                "display_name": "1",
                "ingress_throughput_per_sec": {
                  "bytes": 1048576
                },
                "egress_throughput_per_sec": {
                  "bytes": 1048576
                },
                "total_max_connections": 100,
                "max_data_retention_size": {
                  "bytes": 10737418240
                },
                "max_partitions": 100,
                "max_data_retention_period": "P14D",
                "max_connection_attempts_per_sec": 50,
                "max_message_size": {
                  "bytes": 1048576
                },
                "min_in_sync_replicas": 1,
                "replication_factor": 1,
                "supported_az_modes": [
                  "single"
                ],
                "lifespan_seconds": 172800,
                "quota_consumed": 1,
                "quota_type": "RHOSAKTrial",
                "capacity_consumed": 1,
                "maturity_status": "stable"
              }
            ]
          },
          {
            "id": "standard",
            "display_name": "Standard",
            "sizes": [
              {
                "id": "x1",
                "display_name": "1",
                "ingress_throughput_per_sec": {
                  "bytes": 52428800
                },
                "egress_throughput_per_sec": {
                  "bytes": 104857600
                },
                "total_max_connections": 3000,
                "max_data_retention_size": {
                  "bytes": 1073741824000
                },
                "max_partitions": 1500,
                "max_data_retention_period": "P14D",
                "max_connection_attempts_per_sec": 100,
                "max_message_size": {
                  "bytes": 1048576
                },
                "min_in_sync_replicas": 2,
                "replication_factor": 3,
                "supported_az_modes": [
                  "multi"
                ],
                "quota_consumed": 1,
                "quota_type": "RHOSAK",
                "capacity_consumed": 1,
                "maturity_status": "stable"
              },
              {
                "id": "x2",
                "display_name": "2",
                "ingress_throughput_per_sec": {
                  "bytes": 104857600
                },
                "egress_throughput_per_sec": {
                  "bytes": 209715200
                },
                "total_max_connections": 6000,
                "max_data_retention_size": {
                  "bytes": 2147483648000
                },
                "max_partitions": 3000,
                "max_data_retention_period": "P14D",
                "max_connection_attempts_per_sec": 200,
                "max_message_size": {
                  "bytes": 1048576
                },
                "min_in_sync_replicas": 2,
                "replication_factor": 3,
                "supported_az_modes": [
                  "multi"
                ],
                "quota_consumed": 2,
                "quota_type": "RHOSAK",
                "capacity_consumed": 2,
                "maturity_status": "preview"
              }
            ]
          }
        ]
      })
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

    getSsoProviders: async (c, req, res) => {
      res.status(200).json({
        "name": "mas_sso",
        "base_url": "https://identity.api.openshift.com",
        "token_url": "https://identity.api.openshift.com/auth/realms/rhoas/protocol/openid-connect/token",
        "jwks": "https://identity.api.openshift.com/auth/realms/rhoas/protocol/openid-connect/certs",
        "valid_issuer": "https://identity.api.openshift.com/auth/realms/rhoas"
      });
    },

    // Handling auth
    notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
    unauthorizedHandler: async (c, req, res) =>
      res.status(401).json({ err: "unauthorized" }),
  }
}

module.exports = createKafkaHandlers
