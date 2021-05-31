import { Configuration, DefaultApi } from "../../packages/kafka-instance-sdk/dist";

const accessToken = process.env.IDENTIY_OPENSHIFT_API_TOKEN;
// Path to your kafka - bootstrapServerHost value from Management API
const basePath = "";

const apiConfig = new Configuration({
    accessToken,
    basePath
})

const registryApi = new DefaultApi(apiConfig)

registryApi.getTopicsList().then((data) => {
    console.log(data?.data)
}).catch((err) => {
    console.error(err.message)
})

