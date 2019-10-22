# Notes App

This application allows the user to add, remove, list and read notes that are in a file that follows ".json" format.

* `app.js`: main module that holds the commands definitions.<br>

* `notes.js`: file that holds the functions definition.

* `notes.json`: file that is created to hold the notes in .json format.

## How to use the application

The application follows the format: *node app.js <command> <option>="information ..."* <br>
<br>
List of commands and its options:<br>
  
add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--title="write note's title"&nbsp;&nbsp;&nbsp;&nbsp;--body="write the note's description"  
remove&nbsp;&nbsp;&nbsp;&nbsp;--title="title of the note"  
list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nothing        
read&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--title="title of the note"


**For Example:** node&nbsp;&nbsp;&nbsp;&nbsp;app.js&nbsp;&nbsp;&nbsp;&nbsp;add&nbsp;&nbsp;&nbsp;&nbsp;--title="Note 1"&nbsp;&nbsp;&nbsp;&nbsp;--body="Study node.js"





