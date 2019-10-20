/* ***********************************************
    AUTHOR: Dibe
    
    FILE: notes.js

    DESCRIPTION:
        

 *********************************************** */

const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>
{
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
    const duplicateNotes = notes.filter((element)=>
    {  
        return element.title.toLowerCase() === title.toLowerCase();                                             
    });
    
    if(duplicateNotes.length === 0)
    {
        notes.push({                
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("New note added !");
    } else{
        console.log("Sorry... Title already exists!");
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

    } catch (err){                                      // if the file does not exists
        return [];                                      // it returns an empty array
    }                                                   // that will hold the data
}


const removeNote = (title) =>
{
    const notes = loadNotes();

    let flag = false;
    for (let i = 0; i < notes.length && !flag; ++i)
    {
        if(notes[i].title.toLowerCase() === title.toLowerCase()) {
            notes.splice(i,1);
            saveNotes(notes);
            flag = true;
            console.log(`${title} has been removed!`);
        }
    }
    if(!flag) console.log("No title found to be removed!");
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote
};