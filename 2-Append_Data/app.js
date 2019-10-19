/*  
    AUTHOR: Dibe

    DESCRIPTION:
    This app will open a file, and append information
    into it. then once is done, closes the file
*/

const fs = require('fs');   // import fs object to write in files
const utils = require('./utils.js.js');      // import the utils.js module into appp.js module

const data = 'This is a new line appended from app.js!\n';    // data to be appended

let messages = [];  // create an empty array

const num1 = 5;
const num2 = 10;
messages.push(data);
messages.push(utils.message);
messages.push(`The sum of ${num1} and ${num2} = ${utils.add(num1,num2)}`);

let noteFile;   // needs to be declared outside in order to be read inside the error handling scope
// fs.writeFileSync('notes.txt','This file was created by Node.js!*');     // create and/or overwrite the file with a content

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