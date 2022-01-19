import { Configuration, RegistriesApi, APIErrorCodes, isServiceApiError } from "../../packages/registry-management-sdk/dist";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const registryApi = new RegistriesApi(apiConfig)

registryApi.getRegistries().then((data) => {
    console.log(data?.data)
}).catch((err) => {
    if (isServiceApiError(err)) {
        console.error("Invalid JSON format", err.response?.data.code == APIErrorCodes.ERROR_5)
    }
    console.error(err)
})

