/* ***********************************************
    AUTHOR: Dibe

    FILE: app.js

    DESCRIPTION:
        Main file that will execute validation functio
        that comes from the notes.js custom module

 *********************************************** */

// import custom module
const notes = require('./notes.js');

// set some message
const noteMessage = "### EMAIL + URL Validation ###\n### Via Custom module ###";

// display the welcome message through 
// custom module
notes.getWelcome(noteMessage);
console.log();

const email = 'person@example.com';     // enter here an email
const URL = 'www.goo.m';                // enter here an URL

notes.validation(email, URL);           // provide email and URL variables to be validated