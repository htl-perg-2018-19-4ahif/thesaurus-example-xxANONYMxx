"use strict";
var LineByLineReader = require('line-by-line'), lr = new LineByLineReader('openthesaurus.txt');
/*let argumentsToArray = require("arguments-to-array");

let arrayArguments = ArgumentsToArrayFunction();

let argumentsArray:Array<String> = ArgumentsToArrayFunction();

function ArgumentsToArrayFunction() {
    let array = argumentsToArray(arguments);
    return array;
}*/
var argumentsArray = process.argv.slice(2);
if (argumentsArray.length === 0) {
    process.stdout.write("No Arguments");
    process.exit(-1);
}
lr.on('error', function (err) {
    process.stdout.write("Error");
});
lr.on('line', function (line) {
    var stringArray = line.split(";");
    for (var i = 0; i < stringArray.length; i++) {
        for (var j = 0; j < argumentsArray.length; j++) {
            if (stringArray[i] === argumentsArray[j]) {
                process.stdout.write(line + "\n");
            }
        }
    }
});
lr.on('end', function () {
    process.stdout.write("Ende");
});
