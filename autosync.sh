## List of the folders common across different SDK's 
## This file targets to provide list of the directories that are common across all SDKS

source=../app-services-sdk-go
folders="${source}/.chglog ${source}/.config ${source}/.github ${source}/hack"

cp -r ${folders} ./