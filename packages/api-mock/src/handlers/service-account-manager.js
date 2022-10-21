const nanoid = require("nanoid").nanoid;
const path = require("path");
const { getFullHostname } = require("../utls/host");

const commonServiceAccountFields = {
    id: "service-account-id",
    clientId: "service-account-client-id",
    secret: "service-account-secret",
    name: "service-account-name",
    description: "service-account-description",
    createdBy: "service-account-created-by",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
}

function createServiceAccountHandlers(preSeed) {
    
    return {
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
  
      
      // Handling auth
      notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
      unauthorizedHandler: async (c, req, res) => {
        res.status(401).json({ err: "unauthorized" })
    },
    }
  }

module.exports = createServiceAccountHandlers