/*
    AUTHOR: Dibe
    DESCRIPTION:
    This module holds some implementation
    to be imported and be used by other 
    modules for node.js projects !
 */

console.log('utils.js got accessed!');

const data2 = 'This is a line that came from utils.js\n';

module.exports = data2; // exports the message to be in a global scope to other modules access the contents of it
                        // when another module require this utils.js, the require function will return all the 
                        // variables that are being assigned into "module.exports"