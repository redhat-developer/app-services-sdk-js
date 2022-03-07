
/**
   srs error codes

    ```ts
    apiCall.then((data) => {
        console.log(data?.data.items)
    }).catch((err) => {
      if(APIErrorCodes.ERROR_5 == err.response?.data.code) {
        // Handle error
      }
    })
    ```
*/
export const APIErrorCodes = {
  // TODO - Team to define specific error codes to handle

}