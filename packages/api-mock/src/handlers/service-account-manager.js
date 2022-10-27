const nanoid = require("nanoid").nanoid;
const path = require("path");
const { getFullHostname } = require("../utls/host");

let serviceAccountMap = new Map();

const commonServiceAccountFields = {
    id: nanoid(),
    clientId: nanoid(),
    secret: nanoid(),
    createdBy: "service-account-created-by",
    createdAt: new Date().getTime(),
}

const commonError = {
  id: "103",
  kind: "Error",
  href: "/api/service_account_mgmt/v1/errors/103",
  code: "SERVICE-ACCOUNT-MGMT-103",
  operation_id: "1iWIimqGcrDuL61aUxIZqBTqNRa",
};

function createServiceAccountHandlers(preSeed) {

    return {
      createServiceAccount: async (c, req, res) => {
        if (!req.body.name) {
          return res.status(400).json({
            reason: "Service account name is invalid",
            ...commonError,
          });
        }

        let serviceAccount = {
          name: req.body.name,
          description: req.body.description,
          ...commonServiceAccountFields
        }

        res.status(200).json(serviceAccount);
        serviceAccountMap.set(serviceAccount.id, serviceAccount)
      },

      getServiceAccount: async (c, req, res) => {
        const id = c.request.params.id;
        if (!id) {
          return res.status(400).json({
            reason: "Service account id is invalid",
            ...commonError,
          });
        }
  
        if (!serviceAccountMap.has(id)) {
          return res.status(404).json({
            reason: "Failed to find service account",
            ...commonError,
          });
        }

        const serviceAccount = serviceAccountMap.get(id)
        res.status(204).json(serviceAccount);
      },

      deleteServiceAccount: async (c, req, res) => {
        const id = c.request.params.id;
        if (!id) {
          return res.status(400).json({
            reason: "Service account id is invalid",
            ...commonError,
          });
        }
  
        if (!serviceAccountMap.has(id)) {
          return res.status(404).json({
            reason: "Failed to find service account",
            ...commonError,
          });
        }

        const serviceAccount = serviceAccountMap.get(id)
        res.status(204).json(serviceAccount);
        serviceAccountMap.delete(id)
      },
  
      getServiceAccounts: async (c, req, res) => {
        res.status(200).json(serviceAccountList);
      },
  
      
      // Handling auth
      notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
    //   unauthorizedHandler: async (c, req, res) => {
    //     res.status(401).json({ err: "unauthorized" })
    // },
    }
  }

module.exports = createServiceAccountHandlers