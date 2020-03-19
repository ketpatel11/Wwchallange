const fs = require('fs');

// Function to check if the passed file exists.  @filename
function doesFileExist (filename) {
    const file = filename;
    try {
        if(filename && fs.existsSync(file)) {
            console.log('The file exists.');
            return true;
        } else {
            console.log('Error: The file does not exist.');
        }
        return false;
    } catch (err) {
        console.error(err);
        return false;
    }
}

// Get the passed arguments
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
var fileName = myArgs[0];
console.log('filename passed: ', fileName);

// Check if file Exists
if (doesFileExist (fileName)){ //To Be honest This took lots of googling and my time
    try {
        // read contents of the file
        const data = fs.readFileSync(fileName);
    
        // split the contents by new line
        const lines = data.toString().split(/\r?\n/); 
    
        // print all lines
        lines.forEach((line) => {
            //Split the line into Word and meanings
            const word = line.split("–");
            // if proper format
            if ( word && word.length == 2){
                // print word
                console.log(word[0]);
                // split the meanings as there could be multiple
                const meanings = word[1].split(',');
                meanings.forEach((meaning) => {
                    // print meaning
                    console.log(meaning);
                });
            }else{
                console.log('Error: The Line is not in correct format :  Word - meaning 1, meaning2 ');
            }
        });
    } catch (err) {
        console.error(err);
    }
}

