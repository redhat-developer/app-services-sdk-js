#!/usr/bin/node

const path = require('path');

const args = process.argv.slice(2);
const [githubRepository, branch, openApiDirectory, openApiFileName] = args;

const rawOpenApiURL = path.join("https:///raw.githubusercontent.com", githubRepository,
  branch || 'main',
  openApiDirectory,
  openApiFileName
);

console.log(rawOpenApiURL);