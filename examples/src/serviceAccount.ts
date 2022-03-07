import { Configuration, APIErrorCodes, ServiceAccountsApi } from "../../packages/service-accounts-sdk/dist";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const serviceAccountAPI = new ServiceAccountsApi(apiConfig)

serviceAccountAPI.getServiceAccounts().then((data) => {
    console.log(data?.data)
}).catch((err) => {
    console.error(err.message)
})

