#!/usr/bin/env node
// Práctica para PL Curso 18/19
// https://github.com/ULL-ESIT-PL-1819/p0-t0-esprima-logging-Dibad
const fs = require('fs');
let escodegen = require('escodegen');
let esprima = require('espree');
let estraverse = require('estraverse');

function addLogging(code) {
    let ast = esprima.parse(code);
    estraverse.traverse(ast, {
        enter: function(node) {
            if (node.type === 'FunctionDeclaration' ||
                node.type === 'FunctionExpression') {
                addBeforeCode(node);
            }
        }
    });
    return escodegen.generate(ast);
}

function addBeforeCode(node) {
    let name = node.id ? node.id.name : '<anonymous function>';
    let parameters = node.params.map(param => `\$\{${param.name}\}`);
    let beforeCode = `console.log(\`Entering ${name}(${parameters})\`);`;
    let beforeNodes = esprima.parse(beforeCode, { ecmaVersion: 6 }).body; // Is an Array of ASTs
    node.body.body = beforeNodes.concat(node.body.body);
}

const fileName = process.argv[2] || null;
const input = (fileName && fs.readFileSync(fileName, 'utf8')) || `
function foo(a, b) {
  var x = 'blah';
  var y = (function (z) {
    return z+3;
  })(2);
}
foo(1, 'wut', 3);
`;

const output = addLogging(input);

console.log(`input:\n${input}\n---`);
console.log(`output:\n${output}\n---`);

if (fileName) fs.writeFileSync('out-'+fileName, output);
