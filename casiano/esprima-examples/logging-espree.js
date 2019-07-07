var escodegen = require('escodegen');
var espree = require('espree');
var estraverse = require('estraverse');

function addLogging(code) {
    var ast = espree.parse(code);
    estraverse.traverse(ast, {
        enter: function(node, parent) {
            if (node.type === 'FunctionDeclaration' ||
                node.type === 'FunctionExpression') {
                addBeforeCode(node);
            }
        }
    });
    return escodegen.generate(ast);
}

function addBeforeCode(node) {
    var name = node.id ? node.id.name : '<anonymous function>';
    var beforeCode = "console.log('Entering " + name + "()');";
    var beforeNodes = espree.parse(beforeCode).body;
    node.body.body = beforeNodes.concat(node.body.body);
}

console.log(addLogging(`
function foo(a, b) {   
  var x = 'blah';   
  var y = (function () {
    return 3;
  })();
}     
foo(1, 'wut', 3);
`));