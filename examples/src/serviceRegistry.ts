import { Configuration, DefaultApi } from "../../packages/registry-management-sdk/src";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const registryApi = new DefaultApi(apiConfig)

registryApi.getRegistries().then((data) => {
    console.log(data?.data)
}).catch((err) => {
    console.error(err.message)
})

