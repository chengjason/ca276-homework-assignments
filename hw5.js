// Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

// Using the W3C functions document.createElement(), document.createTextNode(), 
// and document.body.appendChild(), append the following HTML to the page.

// <dl>
// 	<dt>Some word</dt>
// 	<dd>Some definition</dd>
// </dl>

// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi

var dList, dTerm, dDefinition;
dList = document.createElement("dl");
dTerm = document.createElement("dt");
dDefinition = document.createElement("dd");

var term1, definition1;
term1 = document.createTextNode("Allowance For Doubtful Accounts");
//JG: Moving the string within createTextNode to keep your code consistent
definition1 = document.createTextNode("A contra-asset account associated with Accounts Receivable deemed uncollectible");

dDefinition.appendChild(definition1);
dTerm.appendChild(term1);
dList.appendChild(dTerm);
dList.appendChild(dDefinition);

document.body.appendChild(dList);


// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".

//JG: There was no need for the function here.

//JG: This one did not require use of createElement or createTextNode.

document.getElementById('definitions').innerHTML = "<dl><dt>Allowance For Doubtful Accounts</dt><dd>A contra-asset account associated with Accounts Receivable deemed uncollectible</dd></dl>";


// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.

//JG: This one was a lot simpler than what it appeared to be.

$('#definitions')
	.append('<dl><dt>Allowance For Doubtful Accounts</dt><dd>A contra-asset account associated with Accounts Receivable deemed uncollectible</dd></dl>');