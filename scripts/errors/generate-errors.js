const fs = require("fs");
const { cwd } = require("process");
const apis = require(cwd() + "/.errors/index.js");

console.log("Generating errors sdks");

for (api in apis) {
  console.log("Generating error SDK for " + api);
  apiJson = apis[api].definition;
  apiFileLocation = apis[api].file;

  if (!apiJson || !apiJson.items) {
    console.log("invalid error file detected", apiJson);
    exit(1);
  }

  stringBuffer = `
/**
   ${api} error codes

    \`\`\`ts
    apiCall.then((data) => {
        console.log(data?.data.items)
    }).catch((err) => {
      if(APIErrorCodes.ERROR_5 == err.response?.data.code) {
        // Handle error
      }
    })
    \`\`\`
*/
export const APIErrorCodes = {
`;

  apiJson.items.forEach(function (errorType) {
    stringBuffer += `  /** ${errorType.reason}*/\n`;
    stringBuffer += `  ERROR_${errorType.id} : "${errorType.code}", \n\n`;
  });

  stringBuffer += `}`;

  fs.writeFileSync(
    cwd() + "/" + apiFileLocation, stringBuffer, { encoding: "utf8" });
  console.log(`Sucessfully generated ${api} error definitions`);
}
