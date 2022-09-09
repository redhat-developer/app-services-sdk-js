json2yaml ./openapi/srs-fleet-manager.json > ./openapi/srs-fleet-manager.yaml
json2yaml ./openapi/registry-instance.json > ./openapi/registry-instance.yaml
replace  "\*\/\*" "text\/plain" ./openapi/registry-instance.yaml