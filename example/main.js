#!/usr/bin/env node
// standalone Node.js using aSb.jison
var p = require("./calc").parser;

var t = p.parse(process.argv[2] || "3-2-1");
console.log(t);
