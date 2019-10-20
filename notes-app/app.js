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


// customize yargs diplaying version,
// to our app... 
// by default it comes set to 1.0.0
yargs.version('2.0.0');     // change the displaying version
                            // when --version is typed
                            // node app.js --version

// create add command
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {                          // builder is an option where we specify our variables
        title: {                        // this case we create title
            describe: 'Note title',         // title description
            demandOption: true,              // this obligates the user to insert the title option
            type: 'string'                   // this ensures that even the user does not provide any title information
        },                                    // title will have an string, even if it is empty

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{          // handler is the object that will do an action with the information retrieved
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`)
    }
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: ()=>{
        console.log('Removing note!')
    }
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: ()=>{
        console.log('Listing notes!')
    }
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Read note!',
    handler: ()=>{
        console.log('Reading note!')
    }
});

yargs.parse();      // this is allowing the application to access the arguments