var fs = require('fs');

// I/O example -> with DB it may take longer or if a lot of people access your database
// that will take longer 
console.log("Going to get a file");

//async named callback
var onFileLoad = function(err, file) {
	console.log("Got the file");
}
fs.readFile('readFileSync.js', onFileLoad);

//anonymous call back
/*
fs.readFile('readFileSync.js', function(err, file){
	console.log("Got the file");
});

*/
console.log("App continues...");