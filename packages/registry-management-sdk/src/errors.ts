
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
  /** Unspecified error*/
  ERROR_1 : "SRS-MGMT-1", 

  /** Registry with id='?' not found*/
  ERROR_2 : "SRS-MGMT-2", 

  /** Bad date or time format*/
  ERROR_3 : "SRS-MGMT-3", 

  /** Invalid request content or parameters. Make sure the request conforms to the given JSON schema*/
  ERROR_4 : "SRS-MGMT-4", 

  /** Bad request format - invalid JSON*/
  ERROR_5 : "SRS-MGMT-5", 

  /** Required terms have not been accepted for account id='?'*/
  ERROR_6 : "SRS-MGMT-6", 

  /** The maximum number of allowed Registry instances has been reached*/
  ERROR_7 : "SRS-MGMT-7", 

  /** Error type with id='?' not found*/
  ERROR_8 : "SRS-MGMT-8", 

  /** Data conflict. Make sure a Registry with the given name does not already exist*/
  ERROR_9 : "SRS-MGMT-9", 

  /** Bad request format - unsupported media type*/
  ERROR_10 : "SRS-MGMT-10", 

  /** Could not check quota for user?*/
  ERROR_11 : "SRS-MGMT-11", 

  /** Evaluation instances not allowed.*/
  ERROR_12 : "SRS-MGMT-12", 

  /** User already has the maximum number of allowed Evaluation instances.*/
  ERROR_13 : "SRS-MGMT-13", 

  /** Total (global) number of instances exhausted.*/
  ERROR_14 : "SRS-MGMT-14", 

}