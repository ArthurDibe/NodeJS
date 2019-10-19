/* ***********************************************
    AUTHOR: Dibe
    
    FILE: notes.js

    DESCRIPTION:
        Custom module that will display a message
        given from the main module "app.js", then 
        will receive an email, and an URL to be
        validated.

 *********************************************** */

// import 3rd partie packages
const validator = require('validator');
const chalk = require('chalk');

// function that just return some message
const getWelcome = (welcome)=> { console.log(welcome); }

// validate an email and an URL and display if
// are valid or not
const validation = (email, URL) => 
{
    console.log(`Email entered was: ${email}`);  // validates a receiving email
    console.log(`URL entered was: ${URL}`);    // validates a receiving URL

    // create aliases
    const valid = chalk.inverse.green;
    const notValid = chalk.inverse.red;

    if(validator.isEmail(email)){
        console.log(chalk.green('Email:', valid('APPROUVED')));
    } else{
        console.log(chalk.red('Email: ', notValid('DENIED')));
    }

    console.log();

    if(validator.isURL(URL)){
        console.log(chalk.green('URL:', valid('APPROUVED')));
    } else{
        console.log(chalk.red('URL:', notValid('DENIED')));
    }
}



module.exports = {
    getWelcome: getWelcome,
    validation: validation
};