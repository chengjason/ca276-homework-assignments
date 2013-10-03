/*
 * Please follow the instructions carefully.
 * 
 * When a problem says "send 'foo' to the console that means you would write
 * 
 * 	console.log('foo');
 * 
 * I may also say "send the variable x to the console" in which case you'd write
 * 
 * 	console.log(x)
 * 
 * Note: If you have multiple variables x, y, z you can send all of them to the console like so
 * 
 * 	console.log(x, y, z)
 */

// Problem 1) Using JavaScript comments, write your name and today's date below
//My Name: Jason Cheng  
//Today's Date: September 14, 2013

// Problem 2) Create separate variables to store the following. 
// Send all variables to the console.
	// Your e-mail address
	// Your major
	// Your favorite text editor
	// A zip code
	// The value of pi up to 5 decimal places (use Google to find the value)
	// The total cost of a 10 dollar book plus 5% sales tax
	// Whether or not the light switch is on
	// Whether or not Superman can fly
var myEmailAdd ='cadillacboy09@gmail.com';
var myMajor = 'Computer Applications';
var myTextEditor = 'Dreamweaver CS6';
var Zip = '20850';
var pi = 3.14159;
var x = 10, bookCost = x * (1 + 0.05);
var lightSwitchOn = true; //JG: You only need one variable to manage your "on" or "off" state. Later on it can be made false.
var superManFly = true; 
console.log(myEmailAdd, myMajor, myTextEditor, Zip, pi, bookCost, lightSwitchOn, superManFly);

// Problem 3) Use the typeof operator to determine the data type of each variable like so.
	// console.log(typeof myEmail);
	// console.log(typeof myMajor);
	// and so on…
	// Make sure you have at least one string, at least one number, and at least one Boolean.
console.log(typeof myEmailAdd);
console.log(typeof myMajor);
console.log(typeof myTextEditor);
console.log(typeof Zip);
console.log(typeof pi);
console.log(typeof bookCost);
console.log(typeof lightSwitchOn);
console.log(typeof superManFly);

// Problem 4) Create string variables to store the following string values.
// Send all variables to the console.
	// The dog's biting my shoes
	// <a href="#">Some link</a>
	// JavaScript is "easy" if you are good at it

var s = "The dog's biting my shoes";
var t = "<a href='#'>Some Link</a>";
var u = "JavaScript is 'easy' if you are good at it";
console.log(s, t, u);

// Problem 5) Create an array of topics you would like to learn this semester.
// Send this array to the console.

var jsTopics = ["Types", "Values", "Variables", "Expressions", "Statements", "Objects", "Arrays", "Classes", "Modules"];
console.log(jsTopics);

// Problem 6) Send each item of the last array to the console. 
// If your array variable is myArray then you would write
	// console.log(myArray[0])
	// console.log(myArray[1])
	// and so on…

console.log(jsTopics[0]);
console.log(jsTopics[1]);
console.log(jsTopics[2]);
console.log(jsTopics[3]);
console.log(jsTopics[4]);
console.log(jsTopics[5]);
console.log(jsTopics[6]);
console.log(jsTopics[7]);
console.log(jsTopics[8]);

// Problem 7) Use the yourArrayVariable.length property to determine the size of your array.
// Send the result to the console.

console.log(jsTopics.length);
          
// Problem 8) Create a function named "clickMe".
// When the user clicks the button with the ID of "clickMe" send the string 
// "Leave me alone!" to the console.
	// hint: Use document.getElementById to get a reference to the button in
	// a similar way to how we did it in class for the currency conversion
	// calculator.
	
// function clickMe() {
	// getElementById"clickMe".innerHTML="Leave me alone!";
// }
// <button id = "clickMe" type="button" onClick="clickMe()">Click Me!</button>

document.getElementById('clickMe').onclick = function () {
	console.log('Leave me alone!');
}

// JG: Problem 8 doesn't work and it throws an error. The only time you want HTML in your .js file is if you are keeping it within a string variable.

	
// Grade: 8/10