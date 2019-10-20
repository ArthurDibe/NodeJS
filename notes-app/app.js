/* ***********************************************
    AUTHOR: Dibe

    FILE: app.js

    DESCRIPTION:
        

*********************************************** */

// import 3rd partie packages
const chalk = require('chalk');
const yargs = require('yargs');

// import custom module
const notes = require('./notes.js');

const command = process.argv[2];

if(command === "add"){
    console.log(chalk.blue.inverse("Adding note!"));
} else if (command === "remove"){
    console.log(chalk.red.inverse("Removing note!"));
}
