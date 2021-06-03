#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length == 1) {
  process.env.PORT = args[0];
}

require("../src/index");
