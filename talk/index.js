var appName = "Hotel MEAN application";

var hello = function(name) {
	console.log('Hello '+name);
};

var intro = function() {
	console.log("Welcome to the "+appName+".");
};

module.exports = {
	hello: hello,
	intro: intro
}; //expose the methods to app.js