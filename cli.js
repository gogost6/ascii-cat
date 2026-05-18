#!/usr/bin/env node

const { cat } = require("./");

const mood = process.argv[2];

console.log(cat(mood));
