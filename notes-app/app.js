const validator = require('validator');
const notes = require('./notes.js');

const noteMessage = "Edgar Allan Poe once said: Never more...";

console.log(notes.getNotes(noteMessage));
console.log();
console.log(validator.isEmail('person@example.com'));  // validates a receiving email
console.log(validator.isURL('www.google.com'));        // validates a receiving URL