/* ***********************************************
    AUTHOR: Dibe

    FILE: app.js

    DESCRIPTION:
        

*********************************************** */

// import 3rd partie packages
const validator = require('validator');
const chalk = require('chalk');

// import custom module
const notes = require('./notes.js');

const msg = notes.getNotes();

console.log(msg);

const colorfulMSG = chalk.red.inverse.bold('Success');
console.log(colorfulMSG);