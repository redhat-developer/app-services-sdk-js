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
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "cluster|cpu|byoc|ocp",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "any",
              "cloud_provider": "any",
              "cost": 0,
              "product": "OCP",
              "resource_name": "any",
              "resource_type": "cluster"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "add-on|addon-crw-operator",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "any",
              "cloud_provider": "any",
              "cost": 0,
              "product": "ANY",
              "resource_name": "addon-crw-operator",
              "resource_type": "add-on"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "add-on|addon-cluster-logging-operator",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 0,
              "product": "ANY",
              "resource_name": "addon-cluster-logging-operator",
              "resource_type": "add-on"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "pv.storage|gp2",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 0,
              "product": "ANY",
              "resource_name": "gp2",
              "resource_type": "pv.storage"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "compute.node|cpu|byoc|moa",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "burst-2-t3",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "burst-2-t3a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "burst-4-t3",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "burst-4-t3a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "burst-8-t3",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "burst-8-t3a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-128",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-16",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-16-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-16-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-16-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-2",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-2-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-2-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-2-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-32",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-32-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-36",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-36-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-4-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-4-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-4-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-48",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-48-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-48-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-48-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-64",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-64-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-72",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-72-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-8",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-8-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-8-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-8-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-96",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-96-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-96-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highcpu-96-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-12",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-128",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-16",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-16-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-16-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-16-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-16-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-16-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-16-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-16-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2-1d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-2-r5",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-24",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-32",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-32-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-32-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-32-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-32-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-32-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-32-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-32-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4-1d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-4-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-48",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-48-1d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-48-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-48-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-48-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-48-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-48-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-48-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-64",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-64-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-64-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-64-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-64-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-64-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-64-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-64-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8-1d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-8-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-96",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-96-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-96-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-96-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-96-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-96-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highmem-96-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highnet-16-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highnet-2-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highnet-36-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highnet-4-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highnet-72-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highnet-8-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-12",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-16",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-16-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-2-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-2-i3",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-2-i3en",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-24",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-32",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-32-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-4-3en",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-4-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-48",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-48-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-64",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-64-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-8",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-8-3en",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-8-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-96",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "highstorage-96-3en",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-128-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-128-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-16",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-16-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-16-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-16-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-192",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-2",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-2-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-2-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-32",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-32-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-32-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-32-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-4-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-4-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-4-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-48",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-48-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-48-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-48-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-64",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-64-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-64-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-64-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-8",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-8-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-8-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-8-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-96",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-96-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-96-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "standard-96-6i",
              "resource_type": "compute.node"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "network.loadbalancer|network",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 0,
              "product": "ANY",
              "resource_name": "network",
              "resource_type": "network.loadbalancer"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "add-on|addon-dbaas-operator",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "any",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "ANY",
              "resource_name": "addon-dbaas-operator",
              "resource_type": "add-on"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "add-on|addon-ocm-test-operator",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "any",
              "cloud_provider": "any",
              "cost": 0,
              "product": "ANY",
              "resource_name": "addon-ocm-test-operator",
              "resource_type": "add-on"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "cluster|byoc|moa",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "MOA",
              "resource_name": "any",
              "resource_type": "cluster"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
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
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "cluster|rhinfra|rhosrtrial|any",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "rhinfra",
              "cloud_provider": "any",
              "cost": 0,
              "product": "RHOSRTrial",
              "resource_name": "rhosr",
              "resource_type": "cluster"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "network.io|network-io-north-america|aws",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "ANY",
              "resource_name": "network-io-north-america",
              "resource_type": "network.io"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "add-on|addon-managed-api-service",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "any",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "OSDTrial",
              "resource_name": "addon-managed-api-service",
              "resource_type": "add-on"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "network.io|network-io-latam|aws",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "ANY",
              "resource_name": "network-io-latam",
              "resource_type": "network.io"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "add-on|addon-open-data-hub",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "ANY",
              "resource_name": "addon-open-data-hub",
              "resource_type": "add-on"
            }
          ]
        },
        {
          "allowed": 1,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "cluster|byoc|osdtrial",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 1,
              "product": "OSDTrial",
              "resource_name": "any",
              "resource_type": "cluster"
            }
          ],
          "version": "af7ff11d-9b68-4119-92a1-ebaf8ec7124e"
        },
        {
          "allowed": 40,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "compute.node|cpu|byoc|osdtrial",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "burst-2-t3",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "burst-2-t3a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "burst-4-t3",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "burst-4-t3a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "burst-8-t3",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "burst-8-t3a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 128,
              "product": "OSDTrial",
              "resource_name": "highcpu-128",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highcpu-16",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "cpu.large",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highcpu-16-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highcpu-16-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highcpu-16-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highcpu-2",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highcpu-2-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highcpu-2-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highcpu-2-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highcpu-32",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highcpu-32-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 36,
              "product": "OSDTrial",
              "resource_name": "highcpu-36",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 36,
              "product": "OSDTrial",
              "resource_name": "cpu.xlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 36,
              "product": "OSDTrial",
              "resource_name": "highcpu-36-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highcpu-4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highcpu-4-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highcpu-4-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highcpu-4-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highcpu-48",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "cpu.xxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highcpu-48-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highcpu-48-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highcpu-48-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highcpu-64",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highcpu-64-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 72,
              "product": "OSDTrial",
              "resource_name": "highcpu-72",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 72,
              "product": "OSDTrial",
              "resource_name": "cpu.xxxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 72,
              "product": "OSDTrial",
              "resource_name": "highcpu-72-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highcpu-8",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "cpu.medium",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highcpu-8-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highcpu-8-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highcpu-8-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highcpu-96",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "cpu.xxxxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highcpu-96-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highcpu-96-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highcpu-96-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 12,
              "product": "OSDTrial",
              "resource_name": "highmem-12",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 128,
              "product": "OSDTrial",
              "resource_name": "highmem-128",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highmem-16",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "mem.large",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highmem-16-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highmem-16-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highmem-16-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highmem-16-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highmem-16-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highmem-16-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highmem-16-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2-1d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highmem-2-r5",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 24,
              "product": "OSDTrial",
              "resource_name": "highmem-24",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highmem-32",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "mem.xlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highmem-32-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highmem-32-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highmem-32-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highmem-32-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highmem-32-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highmem-32-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highmem-32-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "mem.small",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4-1d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highmem-4-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highmem-48",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "mem.xxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highmem-48-1d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highmem-48-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highmem-48-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highmem-48-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highmem-48-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highmem-48-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highmem-48-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highmem-64",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "mem.xxxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highmem-64-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highmem-64-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highmem-64-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highmem-64-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highmem-64-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highmem-64-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highmem-64-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "mem.medium",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8-1d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highmem-8-r4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highmem-96",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "mem.xxxxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highmem-96-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highmem-96-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highmem-96-5d",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highmem-96-5dn",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highmem-96-5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highmem-96-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highnet-16-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highnet-2-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 36,
              "product": "OSDTrial",
              "resource_name": "highnet-36-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highnet-4-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 72,
              "product": "OSDTrial",
              "resource_name": "highnet-72-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highnet-8-c5n",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 12,
              "product": "OSDTrial",
              "resource_name": "highstorage-12",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highstorage-16",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "highstorage-16-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highstorage-2-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highstorage-2-i3",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "highstorage-2-i3en",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 24,
              "product": "OSDTrial",
              "resource_name": "highstorage-24",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highstorage-32",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "highstorage-32-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highstorage-4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highstorage-4-3en",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "highstorage-4-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highstorage-48",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "highstorage-48-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highstorage-64",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "highstorage-64-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highstorage-8",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highstorage-8-3en",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "highstorage-8-5ad",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highstorage-96",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "highstorage-96-3en",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 128,
              "product": "OSDTrial",
              "resource_name": "standard-128-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 128,
              "product": "OSDTrial",
              "resource_name": "standard-128-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "standard-16",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "gp.large",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "standard-16-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "standard-16-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 16,
              "product": "OSDTrial",
              "resource_name": "standard-16-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 192,
              "product": "OSDTrial",
              "resource_name": "standard-192",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "standard-2",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "standard-2-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 2,
              "product": "OSDTrial",
              "resource_name": "standard-2-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "standard-32",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "gp.xlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "standard-32-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "standard-32-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 32,
              "product": "OSDTrial",
              "resource_name": "standard-32-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "standard-4",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "gp.small",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "standard-4-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "standard-4-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 4,
              "product": "OSDTrial",
              "resource_name": "standard-4-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "standard-48",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "gp.xxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "standard-48-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "standard-48-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 48,
              "product": "OSDTrial",
              "resource_name": "standard-48-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "standard-64",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "gp.xxxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "standard-64-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "standard-64-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 64,
              "product": "OSDTrial",
              "resource_name": "standard-64-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "standard-8",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "gp.medium",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "standard-8-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "standard-8-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 8,
              "product": "OSDTrial",
              "resource_name": "standard-8-6i",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "standard-96",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "gp.xxxxlarge",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "standard-96-5a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "standard-96-6a",
              "resource_type": "compute.node"
            },
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "byoc",
              "cloud_provider": "any",
              "cost": 96,
              "product": "OSDTrial",
              "resource_name": "standard-96-6i",
              "resource_type": "compute.node"
            }
          ],
          "version": "af7ff11d-9b68-4119-92a1-ebaf8ec7124e"
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "network.io|network-io-emea|aws",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "ANY",
              "resource_name": "network-io-emea",
              "resource_type": "network.io"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "cluster|rhinfra|rhosaktrial|marketplace",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "marketplace",
              "byoc": "rhinfra",
              "cloud_provider": "any",
              "cost": 0,
              "product": "RHOSAKTrial",
              "resource_name": "rhosak",
              "resource_type": "cluster"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "network.io|network-io|gcp",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "gcp",
              "cost": 0,
              "product": "ANY",
              "resource_name": "network-io",
              "resource_type": "network.io"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "compute.node|cpu|byoc|ocp",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "any",
              "cloud_provider": "any",
              "cost": 0,
              "product": "OCP",
              "resource_name": "any",
              "resource_type": "compute.node"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "add-on|addon-rhmi-operator",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "standard",
              "byoc": "any",
              "cloud_provider": "any",
              "cost": 0,
              "product": "RHMI",
              "resource_name": "addon-rhmi-operator",
              "resource_type": "add-on"
            }
          ]
        },
        {
          "allowed": 0,
          "cloud_accounts": [
            {
              "cloud_account_id": "16019",
              "cloud_provider_id": "790",
            },
            {
              "cloud_account_id": "192887",
              "cloud_provider_id": "829",
            }
          ],
          "consumed": 0,
          "href": "/api/accounts_mgmt/v1/organizations/1oYbNbfqj3pRO7FK6jioCCP76oF/quota_cost",
          "kind": "QuotaCost",
          "organization_id": "1oYbNbfqj3pRO7FK6jioCCP76oF",
          "quota_id": "network.io|network-io-apac|aws",
          "related_resources": [
            {
              "availability_zone_type": "any",
              "billing_model": "any",
              "byoc": "byoc",
              "cloud_provider": "aws",
              "cost": 0,
              "product": "ANY",
              "resource_name": "network-io-apac",
              "resource_type": "network.io"
            }
          ]
        }
      ],
      "kind": "QuotaCostList",
      "page": 1,
      "size": 23,
      "total": 23
    })
  }
};
