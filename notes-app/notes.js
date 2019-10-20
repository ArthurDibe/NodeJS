/* ***********************************************
    AUTHOR: Dibe
    
    FILE: notes.js

    DESCRIPTION:
        This module holds the methods definitions
        that will allow the user to add, remove, list
        and read notes. 

 *********************************************** */

const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Once Edgar Allan Poe said: \"Never more...\"";
}



const addNote = (title, body) =>
{
    // retrieve an object or an empty array
    // pushing the results into the 
    const notes = loadNotes();  

    // array filter method looks for all elements
    // of an array and returns the ones who match
    // a certain condition, and store the in a array
    const duplicateNotes = notes.filter( (element)=> element.title.toLowerCase()===title.toLowerCase() );
    
    if(duplicateNotes.length === 0)
    {
        notes.push({                
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green(`${title}`), chalk.green.inverse("ADDED!"));
    } else {
        console.log(chalk.yellow(`${title}`),chalk.yellow.inverse("ALREADY EXISTS!"));
    }
}


const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes);
    
    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = () =>
{
    try{                                                // if the file exists
        dataBUFFER = fs.readFileSync('notes.json');     // it will return the object
        const dataJSON = dataBUFFER.toString();         //
        return JSON.parse(dataJSON);

    } catch (err) {                                      // if the file does not exists
        return [];                                      // it returns an empty array
    }                                                   // that will hold the data
}


const removeNote = (title) =>
{
    const notes = loadNotes();

    // array of notes to keep
    const notesToKeep = notes.filter( (element) => element.title.toLowerCase()!==title.toLowerCase() );

    // check if the array of notes to keep has the same length as the original
    if(notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green(`${title}`),chalk.green.inverse("REMOVED!"));
    } else {
        console.log(chalk.yellow(`${title}`),chalk.yellow.inverse("NOT FOUND!"));
    }  
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote
};