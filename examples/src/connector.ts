// For released version replace with "@rhoas/connector-management-sdk"
import { Configuration, ConnectorsApi } from "../../packages/connector-management-sdk";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const connectorsApi = new ConnectorsApi(apiConfig)

connectorsApi.getConnector("id", "kafka-id").then((data) => {
    console.log(data?.data)
}).catch((err) => {
    console.error(err.message)
})

