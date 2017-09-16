require('./instantHello');
var bye = require('./talk/goodbye'); //initialize of object
var talk = require('./talk'); //object talk
var question = require('./talk/question');

talk.intro(); //method intro exposed
talk.hello("Zak");

var answer = question.ask("What is the meaning of life?");
console.log(answer);

bye();