const fs = require('fs');
function doesFileExist (filename) {
    const file = filename || 'file.txt';
    try {
        if(fs.existsSync(file)) {
            console.log('The file exists.');
        } else {
            console.log('The file does not exist.');}
    } catch (err) {
        console.error(err);
    }
}
doesFileExist('file.txt');
