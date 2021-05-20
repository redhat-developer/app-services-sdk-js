#!/usr/bin/env node

const apiPathMappings = require('../../.config/api-client-configs.json');

const args = process.argv.slice(2);

// get file name argument
if (!args || !args.length || args.length < 1) {
  throw new Error("Missing arguments");
}

const [githubRepo, key] = args;

const apiPath = apiPathMappings[githubRepo];
if (!apiPath) {
  throw new Error(`Unknown GitHub repository "${githubRepo}"`)
}

const value = apiPath[key];
if (value === undefined) {
  throw new Error(`Unknown key "${key}" in "${githubRepo} config"`)
}

console.log(value);