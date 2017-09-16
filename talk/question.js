var answer = "Now that's a good question!";

module.exports.ask = function(question) {
	console.log(question);
	return answer;
}; //chaning the ask method to module.exports -> expose methode