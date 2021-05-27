import { Configuration, DefaultApi } from "../../packages/kafka-management-sdk/src";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const kafkaApi = new DefaultApi(apiConfig)

kafkaApi.listKafkas().then((data) => {
    console.log(data?.data.items)
}).catch((err) => {
    console.error(err.message)
})

