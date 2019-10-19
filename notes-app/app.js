/*  
    AUTHOR: Dibe

    DESCRIPTION:
    This app will open a file, and append information
    into it. then once is done, closes the file
*/

const data2 = require('./utils.js');      // import the utils.js module into appp.js module
const fs = require('fs');   // import fs object to write in files

const data = 'This is a new line appended from app.js!\n';    // data to be appended

// fs.writeFileSync('notes.txt','This file was created by Node.js!*');     // create and/or overwrite the file with a content

let noteFile;   // needs to be declared outside in order to be read inside the error handling scope
let messages = [];
messages.push(data);
messages.push(data2);

try {
    noteFile = fs.openSync('notes.txt','a');  // option to open a file in append mode
    for(let i in messages)
        fs.appendFileSync(noteFile, messages[i], 'utf-8');
} catch (err){
    /* Error */
} finally {
    if(noteFile !== undefined)
        fs.closeSync(noteFile)
}