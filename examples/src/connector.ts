// For released version replace with "@rhoas/connector-management-sdk"
import { Configuration, ConnectorsApi, APIErrorCodes, isServiceApiError } from "../../packages/connector-management-sdk";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const connectorsApi = new ConnectorsApi(apiConfig)

connectorsApi.getConnector("id").then((data) => {
    console.log(data?.data)
}).catch((err) => {
    if (isServiceApiError(err)) {
        console.error("Validation issue", err.response?.data.code == APIErrorCodes.ERROR_8)
    }
    console.error(err)
})

