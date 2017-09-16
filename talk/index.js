var hello = function(name) {
	console.log('Hello'+name);
};

var intro = function() {
	console.log("Welcome to the Hotel MEAN application.");
};

module.exports = {
	hello: hello,
	intro: intro
}; //expose the methods to app.js