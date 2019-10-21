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

const addNote = (title, body) =>
{
    // retrieve an object or an empty array
    // pushing the results into the 
    const notes = loadNotes();  

    // find() built-in method returns the element that is found by the callback arrow function
    const duplicated = notes.find( (element) => element.title.toLowerCase()===title.toLowerCase() );

    // if there no duplicated element
    // add the new note, else print error message
    if(!duplicated)
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


const removeNote = (title) =>
{
    const notes = loadNotes();

    // filter() built-in method returns the elements that are not equal to the one specified by the user,
    // the test is made by the anonymous callback arrow function
    const notesToKeep = notes.filter( (element)=> element.title.toLowerCase() !== title.toLowerCase() );

    // check if there was an element removed
    if(notesToKeep.length !== notes.length) 
    {
        saveNotes(notesToKeep);
        console.log(chalk.green(`${title}`),chalk.green.inverse("REMOVED!"));
    } 
    else {
        console.log(chalk.yellow(`${title}`),chalk.yellow.inverse("NOT FOUND!"));
    }  
}


const listNotes = () =>
{
    console.log("--------------------------------------------------------------");
    console.log(chalk.cyan.underline("List of your notes:"));
    const list = loadNotes();
    if(list.length === 0)
    {
        console.log(chalk.cyan.inverse("THERE IS NOTHING TO SHOW. ZERO NOTES"));
    } 
    else {
        for(let i in list) {
            console.log(chalk.magenta(`Note #${parseInt(i)+1}: `),`${list[i].title}`);
        }
        console.log("--------------------------------------------------------------");
    }
}


const readNote = (title) =>
{
    console.log("--------------------------------------------------------------");
    const notes = loadNotes();
    const noteFound = notes.find( (element)=> element.title.toLowerCase() === title.toLowerCase() );
    if(noteFound)
    {
        console.log(chalk.green(`* Title: `), `${noteFound.title}`);
        console.log(chalk.green(`* Description: `), `${noteFound.body}`);
    } 
    else {
        console.log(chalk.cyan(`${title}`), chalk.cyan.inverse(` NOT FOUND`));
    }
    console.log("--------------------------------------------------------------");

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


module.exports = {
    addNote: addNote,
    listNotes: listNotes,
    removeNote: removeNote,
    readNote: readNote
};