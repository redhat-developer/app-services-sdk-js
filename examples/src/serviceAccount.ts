import { Configuration, SecurityApi } from "../../packages/kafka-management-sdk/dist";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const serviceAccountAPI = new SecurityApi(apiConfig)

serviceAccountAPI.getServiceAccounts().then((data) => {
    console.log(data?.data.items)
}).catch((err) => {
    console.error(err.message)
})

