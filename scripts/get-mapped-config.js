#!/usr/bin/env node

const apiPathMappings = require('../.config/api-client-configs.json');

const args = process.argv.slice(2);

// get file name argument
if (!args || !args.length || args.length < 1) {
  throw new Error("Missing arguments");
}

const [apiKey, key] = args;

const apiPath = apiPathMappings[apiKey];
if (!apiPath) {
  throw new Error(`Unknown api file. Check if API is defined in .openapi/"${apiKey}"`)
}

const value = apiPath[key];
if (value === undefined) {
  throw new Error(`Unknown key "${key}" in "${apiKey} config"`)
}

console.log(value);