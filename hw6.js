// CA 276 Homework 6

// DOM Access

// Instructions: Using document.querySelectorAll and CSS selectors, obtain references to the following
// DOM nodes. I've already written calls to document.querySelectorAll(). You just have to fill in the
// CSS selector.

// If you get stuck use this page as a guide: http://www.w3.org/TR/css3-selectors/#selectors

// All LI elements
		
// CSS Selectors for all <li>: li  e.g. li {color: red; font-size: 14px;}
console.log(document.querySelectorAll('li'));

// All LI elements that are the descendants of an OL element

// CSS Selectors: ol li 
console.log(document.querySelectorAll('ol li'));

// All elements with the class name "highlight"

// CSS Selectors for <... class = "highlight"...>: .highlight
console.log(document.querySelectorAll('.highlight'));

// Any element under a form tag (hint: the asterisk is the wild card in CSS)

// Under <form> may have <legend>, <label>, <input>, etc.; for all tags under <form>:  form *
console.log(document.querySelectorAll('form *'));

// All elements with the IDs "movies", "companies", or "fast_food" 
// (hint: use the comma to separate selectors)

// CSS Selector for id = "idName":  #idName 
console.log(document.querySelectorAll('#movies, #companies, #fast_food'));

// All elements that have an ID attribute

// CSS Selector for all elements with an id attr:   *[id]
console.log(document.querySelectorAll('*[id]'));

// All elements that have an ID attribute that ends with the letter "s"

// CSS Selector for ID ends with "s":  *[id$= "s"]
console.log(document.querySelectorAll('*[id$= "s"]'));

// The first child LI element of all lists, ordered or unordered

// li:first-child	//* li:first-child	//li:nth-child(1)
console.log(document.querySelectorAll('li:first-child'));

// The second child LI element of all lists, ordered or unordered

console.log(document.querySelectorAll('li:nth-child(2)'));

// All elements that are empty

// CSS Selector for empty elements:		*empty
console.log(document.querySelectorAll('*:empty'));

// All elements that are checked

// All checked elements are children of input element
// Either button or dropped check box
// CSS Selector for checked elements:	input: checked
console.log(document.querySelectorAll('input:checked'));

// All radio buttons

// <input type = "radio" ...>
// CSS Selector for radio button:  input[type="radio"]
console.log(document.querySelectorAll('input[type="radio"]'));

// All radio buttons that are checked

// CSS Selector for checked button:	`	input[type="radio"]:checked	
console.log(document.querySelectorAll('input[type="radio"]:checked'));

// All TDs that represent the 2nd column in the table with ID "names"

// #name td:nth-child(2)
console.log(document.querySelectorAll('#names td:nth-child(2)'));

// All elements with the class name "hidden" that are not form elements

// Not <form> .hidden:		not(form) .hidden
console.log(document.querySelectorAll('*:not(form).hidden'));

// All even TRs that are descendants of a TBODY

console.log(document.querySelectorAll('tbody tr:nth-child(even)'));

// All odd TRs that are descendants of a TBODY

console.log(document.querySelectorAll('tbody tr:nth-child(odd)'));


// OPTIONAL: Using what you know about arrays and accessing the DOM, write a function 
// that sorts the table with the ID "names". Your sort order will be ascending alphabetical 
// by last name. There are several ways to solve this. Below is an explanation of the logic for 
// one possible solution (feel free to skip this if you want to try out your own own algorithm):

// 1) append a new TBODY to the table (it is possible to have two TBODY tags in TABLE)
// 2) loop through all of the TR elements
// 3) insert each TR into the new TBODY. 
// 4) SORT LOGIC: During the loop you will need to place the new TR before the first TR 
// with a value greater than itself. If you were trying to insert the row with the last name “Boop” 
// into the TBODY below

/*
<tbody>
	<tr>
		<td>1</td>
		<td>John</td>
		<td>Doe</td>
	</tr>
</tbody>

the new row would go before it.

<tbody>
	<tr>
		<td>2</td>
		<td>Betty</td>
		<td>Boop</td>
	</tr>
	<tr>
		<td>1</td>
		<td>John</td>
		<td>Doe</td>
	</tr>
</tbody>
*/

// This technique is referred to as the Bubble sort. The rows with the highest values will 
// "bubble" towards the end.

// 5) Remove the empty TBODY element from the DOM tree.

//**************************************************************
//**************************************************************

//For OPTIONAL
//Adding new TRs into the existing tBody
/*
//****************************************************************
//HTML for Adding Rows On Top of a Table
//****************************************************************

/*
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Add Rows on Top of a Table </title>
<style>
td {
	text-align:center;
	color:#600;
	font-family:Arial, Helvetica, sans-serif;
	font-weight:bold;
}

input{
	color:#FFF;
	background:#300;
}
h3 {
	color:#03F;
}
p {
	color:#630;
}
</style>
</head>

<body>
<h3>Addding Rows on Top of an Existing Table</h3>
<table id="myTable" border="1">
<tbody>
<tr>
<td align="center">1</td>
<td align="center">John</td>
<td align="center">Doe</td>
</tr>
<tr>
<td>3</td>
<td>Irene</td>
<td>Wahba</td>
</tr>
<tr>
<td>4</td>
<td>Jenny</td>
<td>Smith</td>
</tr>
</tbody>
</table>
<br>
<input id="addRow" class= "addBtn" type="button" onclick="insRow()" value="Add Row">
<input id="addTittle" class= "addBtn" type="button" onclick="insHead()" value="Add ColTitle">
<p>**Click one time only**<br />
**Continue working on One-time click button**</p>
*/
//<script>

function insRow()
{
var x=document.getElementById('myTable').insertRow(0);
var a=x.insertCell(0);
var b=x.insertCell(1);
var c=x.insertCell(2);
a.innerHTML="2";
b.innerHTML="Betty";
c.innerHTML="Boop"
}

function insHead()
{
var x=document.getElementById('myTable').insertRow(0);
var a=x.insertCell(0);
var b=x.insertCell(1);
var c=x.insertCell(2);
a.innerHTML="Index";
b.innerHTML="First Name";
c.innerHTML="Last Name"
}

 //</script>
//</body>
//</html>

//****************************************************************
//html for Table Sorting
//****************************************************************
/*
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Sortable Table</title>
<style type="text/css">
p {
	font-family:Verdana, Geneva, sans-serif;
	font-size:18px;
	color:#600;
}
th {
	font-family:Georgia, "Times New Roman", Times, serif;
}
td {
	font-family:Arial, Helvetica, sans-serif;
	font-weight:bold;
	color:#060;
}
</style>
</head>
*/
/*
<body>
<p>**This is a sortable table.  Just click on the column head.**</p>
<p>**If the first click results in ascending order,<br /> 
the second click will be descending; vice versa**<p><br />


<table id="myTable" cellspacing="0" cellpadding="2" rules="cols" border="2" >
<thead>
<tr>
<th><a onclick="sortTable(0);" href="javascript:;">Index</a></th>
<th><a onclick="sortTable(1);" href="javascript:;">First Name</a></th>
<th><a onclick="sortTable(2);" href="javascript:;">Last Name</a></th>
</tr>
</thead>
<tbody>
<tr>    
<td align="center" style="width:40px;">1</td>    
<td align="center" style="width:90px;">John</td> 
<td align="center" style="width:90px;">Doe</td>
</tr>  
<tr>    
<td align="center" style="width:40px;">2</td>    
<td align="center" style="width:90px;">Betty</td>  
<td align="center" style="width:90px;">Woop</td>  
</tr>  
<tr>    
<td align="center" style="width:40px;" >3</td>   
<td align="center" style="width:90px;" >Irene</td>    
<td align="center" style="width:90px;">Wahba</td>  
</tr>  
<tr>    
<td align="center" style="width:40px;">4</td>  
<td align="center" style="width:90px;">Jenny</td>    
<td align="center" style="width:90px;">Smith</td>  
</tr> 
<br />
</tbody>
</table>
*/
//<script type="text/javascript">
//Set up sortTable()

var clickedOn = 0;
function sortTable(clickOn) {

var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody')[0];
var rows = tbody.getElementsByTagName('tr');

var rowArray = new Array();
for (var i=0, length=rows.length; i<length; i++) {
rowArray[i] = new Object;
rowArray[i].oldIndex = i;
rowArray[i].value = rows[i].getElementsByTagName('td')[clickOn].firstChild.nodeValue;
}

//Set up toggle effect on ascending and descending
if (clickOn == clickedOn) { rowArray.reverse(); }
else {
clickedOn = clickOn;

//Numeric Comparison for the first column
if (clickedOn == 0) {
rowArray.sort(numericCompare);
}
else {
rowArray.sort(textCompare);
}
}

var newTbody = document.createElement('tbody');
for (var i=0, length=rowArray.length ; i<length; i++) {
newTbody.appendChild(rows[rowArray[i].oldIndex].cloneNode(true));
}

table.replaceChild(newTbody, tbody);
}

function textCompare(a, b) { 

var aVal = a.value;
var bVal = b.value;
return (aVal == bVal ? 0 : (aVal > bVal ? 1 : -1));
}
// Compare number
function numericCompare(a, b) {

var aVal = parseInt(a.value);
var bVal = parseInt(b.value);
return (aVal - bVal);
}

//</script>
//</body>
//</html>
