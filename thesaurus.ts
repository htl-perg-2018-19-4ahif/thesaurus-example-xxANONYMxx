let LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('openthesaurus.txt');

let argumentsArray:Array<String> = process.argv.slice(2);

if(argumentsArray.length === 0){
    process.stdout.write("No Arguments");
    process.exit(-1);
}

lr.on('error', function (err:string) {
	process.stdout.write("Error");
});

lr.on('line', function (line:string) {
    let stringArray:Array<String> = line.split(";");
    for(let i:number = 0; i < stringArray.length; i++){
        for(let j:number = 0; j < argumentsArray.length; j++){
            if(stringArray[i] === argumentsArray[j]){
                process.stdout.write(line + "\n");
            }
        }
    }
});

lr.on('end', function () {
	process.stdout.write("Ende");
});