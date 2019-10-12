#!/usr/bin/env node
const yargs = require("yargs");
const path = require("path");
const fs = require("fs");

// Path of directory from which script is called
const currentDirectory = process.cwd();

const pathToJSONConfig = yargs.argv["_"][0];

if (pathToJSONConfig && path.extname(pathToJSONConfig) == ".json") {
  const resolvedPathToConfig = path.resolve(currentDirectory, pathToJSONConfig);

  let config;
  try {
    config = JSON.parse(fs.readFileSync(resolvedPathToConfig, "utf8"));
    require("./main")(config);
  } catch (error) {
    console.log("Invalid JSON format provided");
  }
} else {
  console.log("Config JSON file not provided");
}
