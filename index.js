alert("Hello william press OK to take the love calculator quiz");
prompt("what is your name?");
prompt("what is your partiners name?");
prompt("How old is your partiner?");
prompt("What is your partiners favourite sex postion?");
prompt("who is your partiners closest family");

var loveCalculator = Math.random() * 100; 
loveCalculator = Math.floor(loveCalculator) + 1;

alert("your love score " + loveCalculator);

if ( loveCalculator > 75) { 
 alert("you have so much love for her 💖");
} else {
 alert
("you should go do some more work in your relationship! 😡")
}