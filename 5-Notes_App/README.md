# Notes App

This application allows the user to add, remove, list and read notes that are in a file that follows ".json" format.

* `app.js`: main module that holds the commands definitions.<br>

* `notes.js`: file that holds the functions definition.

* `notes.json`: file that is created to hold the notes in .json format.

## How to use the application

The application follows the format: **node app.js** *command* *option=*"information ..." <br>
<br>
List of commands and its options:<br>

| **COMMAND** | **OPTION 1**           | **OPTION 2**         |
| ----------- |:----------------------:|:--------------------:|
| add         | --title="Note's Title" | --body="description" |
| remove      | --title="Note's Title" | -                    |
| list        | -                      | -                    |
| read        | --title="Note's Title" | -                    |

***For Example:***&nbsp;&nbsp;node&nbsp;&nbsp;app.js&nbsp;&nbsp;&nbsp;add&nbsp;&nbsp;&nbsp;--title="Note 1"&nbsp;&nbsp;&nbsp;--body="Study node.js"





