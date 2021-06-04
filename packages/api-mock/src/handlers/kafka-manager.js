const nanoid = require("nanoid").nanoid;

const commonKafkaFields = {
  kind: "kafka",
  status: "complete",
  cloud_provider: "aws",
  multi_az: false,
  region: "us-east-1",
  bootstrapServerHost: process.env.HOSTNAME || "localhost:8080/data/kafka",
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

const kafkas = {
  uFYJpM76DaIqVqqgZjtrz: {
    id: "uFYJpM76DaIqVqqgZjtrz",
    kind: "kafka",
    href: "/api/kafkas_mgmt/v1/kafkas/1iSY6RQ3JKI8Q0OTmjQFd3ocFRg",
    owner: "api_kafka_user",
    name: "sample-kafka",
    ...commonKafkaFields,
  },
};

module.exports = {
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
    console.log(JSON.stringify(kafkas, undefined, 2));
    res.status(202).json(kafka);
  },

  deleteKafkaById: async (c, req, res) => {
    // console.log(c.request.params.id, kafkas[c.request.params.id]);
    if (!c.request.params.id || !kafkas[c.request.params.id]) {
      return res.status(400).json({
        reason: "Missing or invalid id field",
        ...commonError,
      });
    }

    const kafka = Object.assign({}, kafkas[c.request.params.id]);
    delete kafkas[c.request.params.id];
    res.status(204).json(kafka);
  },

  getKafkaById: async (c, req, res) => {
    if (!c.request.params.id || !kafkas[c.request.params.id]) {
      return req.body.res.status(400).json({
        reason: "Missing or invalid id field",
        ...commonError,
      });
    }

    res.status(200).json(kafkas[c.request.params.id]);
  },

  listKafkas: async (c, req, res) => {
    return res.status(200).json({
      kind: "KafkaRequestList",
      page: 1,
      size: 50,
      total: kafkas.length,
      items: Object.values(kafkas),
    });
  },

  listCloudProviders: async (_c, _req, res) => {
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

  listCloudProviderRegions: async (_c, _req, res) => {
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
      clientID: clientId.toString(),
      clientSecret: clientSecret.toString(),
    });
  },

  listServiceAccounts: async (c, req, res) => {
    res.status(200).json({
      kind: "ServiceAccountList",
      items: [
        {
          value: {
            id: "1",
            kind: "ServiceAccountListItem",
            href: "/api/managed-services-api/v1/serviceaccounts/1",
            name: "my-app-sa",
            description: "service account for my app",
            clientID: "SA-121212",
            owner: "test-user",
            created_at: "2021-04-07T16:24:01+05:30",
          },
          $$ref: "/oas/spec#/components/examples/ServiceAccountListItemExample",
        },
      ],
    });
  },

  getServiceAccountById: async (c, req, res) => {
    res.status(200).json({
      id: "1",
      kind: "ServiceAccount",
      href: "/api/managed-services-api/v1/serviceaccounts/1",
      name: "my-app-sa",
      description: "service account for my app",
      clientID: "SA-121212",
      owner: "test-user",
      created_at: "2021-04-07T16:24:01+05:30",
    });
  },

  deleteServiceAccount: async (c, req, res) => {
    res.status(200).json({
      id: "1",
      kind: "ServiceAccount",
      href: "/api/managed-services-api/v1/serviceaccounts/1",
      name: "my-app-sa",
      description: "service account for my app",
      clientID: "SA-121212",
      owner: "test-user",
      created_at: "2021-04-07T16:24:01+05:30",
    });
  },

  // Handling auth
  notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
  unauthorizedHandler: async (c, req, res) =>
    res.status(401).json({ err: "unauthorized" }),
};
