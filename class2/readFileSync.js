var fs = require('fs');

// I/O example -> with DB it may take longer or if a lot of people access your database
// that will take longer 
console.log("Going to get a file");
var file = fs.readFileSync('readFileSync.js');
console.log("Got the file");

console.log("App continues...");