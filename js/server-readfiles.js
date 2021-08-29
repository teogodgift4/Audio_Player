//requiring path and fs modules
const path = require('path');
const fs = require('fs');

myData = [];
//joining path of directory 
const directoryPath = path.join(__dirname, '../tracks');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        if (file !='thumbnails' && file!='.DS_Store'){
           myData.push(file); 
        }
    });
    console.log(this.myData); 
    module.exports.myData = this.myData;
}); 



