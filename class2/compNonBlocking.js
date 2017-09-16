//built in object to create a child process
var childProcess = require('child_process');

console.log(1);

//spawn method -> command to run, file to run, options-> stdio sharing
var newProcess = childProcess.spawn('node', ['fibonacci.js'], {
	stdio: 'inherit'
});

console.log(2);