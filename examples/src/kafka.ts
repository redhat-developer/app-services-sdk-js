// For released version replace with "@rhoas/kafka-management-sdk"
import { Configuration, DefaultApi, APIErrorCodes, isServiceApiError } from "../../packages/kafka-management-sdk/dist";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const kafkaApi = new DefaultApi(apiConfig)

kafkaApi.getKafkas().then((data) => {
    console.log(data?.data.items)
}).catch((err) => {
    if (isServiceApiError(err)) {
        console.error("Validation issue", err.response?.data.code == APIErrorCodes.ERROR_8)
    }
    console.error(err)
})

 

