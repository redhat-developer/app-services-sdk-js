const nanoid = require("nanoid").nanoid;
const { getFullHostname } = require("../utls/host");
const path = require("path");

const commonFields = {
  kind: "serviceregistry",
  status: "ready",
  owner: process.env.RESOURCE_OWNER,
  registryDeploymentId: 1,
  registryUrl: getFullHostname(),
  created_at: "2020-10-05T12:51:24.053142Z",
  updated_at: "2020-10-05T12:56:36.362208Z"
};

const commonError = {
  id: "103",
  kind: "Error",
  href: "/api/serviceregistry_mgmt/v1/errors/103",
  code: "registries-MGMT-103",
  operation_id: "1iWIimqGcrDuL61aUxIZqBTqNRa",
};

const registries = {};

module.exports = function createRegistryHandlers(preSeed) {
  if (preSeed) {
    registries['llmNteR4P7waRp5nJIReG'] = {
      id: "llmNteR4P7waRp5nJIReG",
      href: "/api/serviceregistry_mgmt/v1/registries/llmNteR4P7waRp5nJIReG",
      name: "sample-registry",
      ...commonFields,
    }
  }
  return {
    getRegistries: async (c, req, res) => {
      res.status(200).json({
        kind: "RegistryRestList",
        page: 1,
        size: 50,
        total: registries.length,
        items: Object.values(registries),
      });
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
      res.status(200).json(registry);
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

      res.status(200).json(registries[c.request.params.registryId]);
    },

    deleteRegistry: async (c, req, res) => {
      const id = c.request.params.registryId;
      if (
        !id ||
        !registries[id]
      ) {
        return res.status(400).json({
          reason: "Missing or invalid id field",
          ...commonError,
        });
      }

      const registry = registries[id];
      delete registries[id];
      res.status(204).json(registry);
    },

    // Handling auth
    notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
    unauthorizedHandler: async (c, req, res) =>
      res.status(401).json({ err: "unauthorized" }),
  };
}