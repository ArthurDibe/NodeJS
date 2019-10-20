const fs = require('fs');

// const book = {
//     title: "The Lord of The Rings",
//     author: "J. J. Tolkie"
// };

// const bookJSON = JSON.stringify(book);       // converts an JavaScript object into JSON string object
                                            // the file system only can read strings
                                            // in an JSON format, the object is not an object anymore,
                                            // is just strings, then the properties cannot be accessed
                                            // like an JavaScript object can...
// console.log(bookJSON);      

// const parseDATA = JSON.parse(bookJSON);     // convert JSON format data back into JavaScript object,
//                                             // meaning that we are able to access the object attributes
// console.log(parseDATA.author);

// fs.writeFileSync("1-json.json", bookJSON);      // creates a file called "1-json.json" and write the json string object


// HOW TO READ A FILE THAT CONTAINS JSON OBJECT STYLE
// const dataBuffer = fs.readFileSync("1-json.json");      // this retrieves the binary format of the JSON object
// const dataJSON = dataBuffer.toString();                 // .toString() method converts back to string
// const data = JSON.parse(dataJSON);                      // parse the data into an object
// console.log(data.title);


const dataBUFFER = fs.readFileSync("1-json.json");  //receive an binary representation
let dataJSON = dataBUFFER.toString();             // convert the binary into string
let data = JSON.parse(dataJSON);                  // convert the string into a JavaScript Object
data.name = "Receiving Info";
data.version = "1.5.5";
data.description = "This code starts the relationship between system and user";
data.main = "1-json.js";

dataJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json",dataJSON);

