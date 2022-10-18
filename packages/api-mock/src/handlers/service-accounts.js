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

const commonServiceAccountError = {
    error: "service-account-error",
}

function createServiceAccountHandlers(preSeed)  {
    if (!preSeed) {
        preSeed = [];
    }
    const serviceAccounts = preSeed.map((sa) => {
        return {
            ...sa,
            id: nanoid(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
    }
    );
}
