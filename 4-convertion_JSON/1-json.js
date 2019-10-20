/* ***********************************************
    AUTHOR: Dibe
    
    FILE: 1-json.js

    DESCRIPTION:
        read a JSON file, converts it into a JS object
        change the object's information, then 
        resent the object back to overwrite the file
        with new data, and converted back to JSON format

 *********************************************** */

const fs = require('fs');

const dataBUFFER = fs.readFileSync("1-json.json");  //receive an binary representation
let dataJSON = dataBUFFER.toString();               // convert the binary into string
let data = JSON.parse(dataJSON);                    // convert the string into a JavaScript Object

// change object's information: INSERT NEW INFORMATION HERE
data.name = "Receiving Info";                       
data.version = "1.5.5";                             
data.description = "This code starts the relationship between system and user";
data.main = "1-json.js";

//convert into JSON format, string
dataJSON = JSON.stringify(data);

// obverwrite the file with the object in string format
fs.writeFileSync("1-json.json",dataJSON);

