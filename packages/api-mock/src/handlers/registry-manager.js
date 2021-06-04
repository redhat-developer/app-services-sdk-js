const nanoid = require("nanoid").nanoid;
const { getFullHostname } = require("../utls/host");
const path = require("path")

const commonFields = {
  kind: "serviceregistry",
  status: {
    value: "READY",
    lastUpdated: "2021-05-04T12:34:56Z",
  },
  registryDeploymentId: 1,
  registryUrl: path.join(getFullHostname(), "/data/service-registry"),
  owner: "api_registry_user",
};

const commonError = {
  id: "103",
  kind: "Error",
  href: "/api/serviceregistry_mgmt/v1/errors/103",
  code: "registries-MGMT-103",
  operation_id: "1iWIimqGcrDuL61aUxIZqBTqNRa",
};

const registries = {
  llmNteR4P7waRp5nJIReG: {
    id: "llmNteR4P7waRp5nJIReG",
    kind: "serviceregistry",
    href: "/api/serviceregistry_mgmt/v1/registries/llmNteR4P7waRp5nJIReG",
    name: "sample-registry",
    ...commonFields,
  },
};

module.exports = {
  getRegistries: async (c, req, res) => {
    res.status(200).json(Object.values(registries));
  },

  createRegistry: async (c, req, res) => {
    if (!req.body.name) {
      return res.status(400).json({
        reason: "Missing name field",
        ...commonError,
      });
    }
    const newId = nanoid();
    const registry = {
      id: newId,
      href: "/api/registries_mgmt/v1/serviceregistry/" + newId,
      ...req.body,
      ...commonFields,
    };
    registries[newId] = registry;
    console.log(JSON.stringify(registries, undefined, 2));
    res.status(200).json(registries);
  },

  getRegistry: async (c, req, res) => {
    if (
      !c.request.params.registryId ||
      !registries[c.request.params.registryId]
    ) {
      return res.status(400).json({
        reason: "Missing or invalid id field",
        ...commonError,
      });
    }

    res.status(200).json(registries[c.request.params.id]);
  },

  deleteRegistry: async (c, req, res) => {
    if (
      !c.request.params.registryId ||
      !registries[c.request.params.registryId]
    ) {
      return res.status(400).json({
        reason: "Missing or invalid id field",
        ...commonError,
      });
    }

    const registry = registries[c.request.params.id];
    delete registries[c.request.params.id];
    res.status(204).json(registry);
  },

  // Handling auth
  notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
  unauthorizedHandler: async (c, req, res) =>
    res.status(401).json({ err: "unauthorized" }),
};
