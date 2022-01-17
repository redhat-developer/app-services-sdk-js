import { Configuration, RegistriesApi, APIErrorCodes } from "../../packages/registry-management-sdk/dist";

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
    console.error(err.message)
    console.error("Invalid JSON format",err.code == APIErrorCodes.ERROR_5)
})

