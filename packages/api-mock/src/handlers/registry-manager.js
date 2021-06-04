module.exports = {
  getRegistries: async (c, req, res) => {
    res.status(200).json([
      {
        "id": 42,
        "name": "test",
        "registryUrl": "https://registry.apps.example.com/t/5213600b-afc9-487e-8cc3-339f4248d706",
        "status": {
          "value": "AVAILABLE",
          "lastUpdated": "2021-05-04T12:34:56Z"
        },
        "registryDeploymentId": 1
      }
    ]);
  },
  createRegistry: async (c, req, res) => {
    res.status(200).json({
      "id": 42,
      "name": "test",
      "registryUrl": "https://registry.apps.example.com/t/5213600b-afc9-487e-8cc3-339f4248d706",
      "status": {
        "value": "PROVISIONING",
        "lastUpdated": "2021-05-04T12:34:56Z"
      },
      "registryDeploymentId": 1
    });
  },
  getRegistry: async (c, req, res) => {
    res.status(200).json({
      "id": 42,
      "name": "test",
      "registryUrl": "https://registry.apps.example.com/t/5213600b-afc9-487e-8cc3-339f4248d706",
      "status": {
        "value": "AVAILABLE",
        "lastUpdated": "2021-05-04T12:34:56Z"
      },
      "registryDeploymentId": 1
    });
  },
  deleteRegistry: async (c, req, res) => {
    res.status(204).json();
  },
  
  // Handling auth
  notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
  unauthorizedHandler: async (c, req, res) =>
    res.status(401).json({ err: "unauthorized" }),
};
