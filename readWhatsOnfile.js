const fs = require('fs');
const file = 'file.txt';
fs.readFile('file.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString());
});

