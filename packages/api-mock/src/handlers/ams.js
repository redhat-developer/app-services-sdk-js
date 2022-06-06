module.exports = {
  // Simulate accepted terms and conditions
  termsReview: async (c, req, res) => {
    return res.json({
      account_id: "test",
      organization_id: "test",
      TermsAvailable: false,
      TermsRequired: false,
    });
  },
  // Simulate a user account
  currentAccount: async (c, req, res) => {
    return res.json({
      "created_at": "2021-02-16T11:51:39.462171Z",
      "email": "jdoe@xyz.com",
      "first_name": "John",
      "href": "/api/accounts_mgmt/v1/accounts/1oYvNfyVsFGYkbMnDkox1cgEGJH",
      "id": "1oVvNfyVsFGYkbMpDkox1dhEGJC",
      "kind": "Account",
      "last_name": "Doe",
      "organization": {
        "created_at": "2021-02-16T11:51:39.459733Z",
        "ebs_account_id": "9304914",
        "external_id": "08493791",
        "href": "/api/accounts_mgmt/v1/organizations/1oYvNfyVsFGYkbMnDkox1cgEGJH",
        "id": "1oYvNbfqj3pRO6EK6jhnBBP76oL",
        "kind": "Organization",
        "name": "Random Company",
        "updated_at": "2022-06-06T07:16:10.939821Z"
      },
      "rhit_account_id": "949585859",
      "rhit_web_user_id": "528896906",
      "updated_at": "2022-05-30T13:12:55.726597Z",
      "username": "jdoe"
    });
  },
  // Mock a summary of quota cost
  quotaCostGet: async (c, req, res) => {
    return res.json({
      "items": [
        {
          "allowed": 0,
          "cloud_accounts": {
            "items": [
              {
                "cloud_account_id": 16019,
                "cloud_provider_id": 790,
              },
              {
                "cloud_account_id": 192887,
                "cloud_provider_id": 829,
              }
            ],
          },
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYvNbfqj3pRO6EK6jhnBBP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYvNbfqj3pRO6EK6jhnBBP76oF",
          "quota_id": "cluster|rhinfra|rhosaktrial|standard",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "rhinfra",
              "cloud_provider": "any",
              "cost": 0,
              "product": "RHOSAKTrial",
              "resource_name": "rhosak",
              "resource_type": "cluster"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "rhinfra",
              "cloud_provider": "any",
              "cost": 0,
              "product": "RHOSAKTrial",
              "resource_name": "rhosak",
              "resource_type": "cluster"
            }
          ],
          "version": "af7ff11d-9b68-4119-92a1-ebaf8ec7124e"
        },
        {
          "allowed": 2,
          "cloud_accounts": {
            "items": [
              {
                "cloud_account_id": 16019,
                "cloud_provider_id": 790,
              },
              {
                "cloud_account_id": 192887,
                "cloud_provider_id": 790,
              },
              {
                "cloud_account_id": 9404,
                "cloud_provider_id": 820,
              }
            ],
          },
          "consumed": 1,
          "href": "/api/accounts_mgmt/v1/organizations/1oYvNbfqj3pRO6EK6jhnBBP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYvNbfqj3pRO6EK6jhnBBP76oF",
          "quota_id": "cluster|rhinfra|rhosaktrial|standard",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "rhinfra",
              "cloud_provider": "any",
              "cost": 1,
              "product": "RHOSAKTrial",
              "resource_name": "rhosak",
              "resource_type": "cluster"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "rhinfra",
              "cloud_provider": "any",
              "cost": 0,
              "product": "RHOSAKTrial",
              "resource_name": "rhosak",
              "resource_type": "cluster"
            }
          ],
          "version": "af7ff11d-9b68-4119-92a1-ebaf8ec7129p"
        }
      ],
      "kind": "QuotaCostList",
      "page": 1,
      "size": 1,
      "total": 1,
    })
  }
};
