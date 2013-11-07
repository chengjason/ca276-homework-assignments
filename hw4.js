// Homework 4

// This homework assignment will give you practice working with objects. 
// All problems will be based on the object definition below.


// Object: Athlete

// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions): 

// introduce = returns 'Hello! My name is _______ and I am from ________'. 
// Fill in the blanks with the values name and country of origin, respectively.

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.


var athlete1 = {};

athlete1.name = "Jason Cheng";
athlete1.height = "5.7 ft";
athlete1.age = "23";
athlete1.country = "USA";
athlete1.medals = ["Silver", "Bronze"];
athlete1.isOlympian = false;

athlete1.introduce = function() {
	return "Hello! My name is " + this.name + " and I am from " + this.country + ".";
}

//JG: This is supposed to be a function
athlete1.addMedal = function(medal) {
	this.medals.push(medal);
}


// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).


var athlete2 = {};

athlete2['name'] = "Jason Cheng";
athlete2['height'] = "5.7 ft";
athlete2['age'] = "23";
athlete2['country'] = "USA";
athlete2['medals'] = ["Silver", "Bronze"];
athlete2['isOlympian'] = false;

athlete2['introduce'] = function() {
	return "Hello! My name is " + this['name'] + " and I am from " + this['country'] + ".";
}

athlete2['addMedal'] = function(medal) {
	this['medals'].push(medal);
}



// Problem 3
// Create the same object using ONE object literal


var athlete3 = {
	// set key/value pairs inside here
	name: "Jason Cheng",
	height: "5.7 ft",
	age: "23",
	country: "USA",
	medals: ["Silver", "Bronze"],
	isOlympian: false,
	introduce: function() {
		return "Hello! My name is " + this.name + " and I am from " + this.country + ".";
	},
	addMedal: function(medal) {
		this['medals'].push(medal);
	}
}

athlete3.addMedal = athlete3.medals.push("Gold");

// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html

//JG: Use a capital letter when defining prototypes
function Athlete(name, age, height, country, medals, isOlympian) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.country = country;
	this.medals = medals;
	//JG: This property was missing
	this.isOlympian = isOlympian;

	//JG: Incorrect function name
	this.introduce = function() {
		return "Hello! My name is " + this.name + ".  I am from " + this.country;
	}

	//JG: This was missing
	this.addMedal = function(medal) {
		this['medals'].push(medal);
	}
}

var p1 = new Athlete("Jarvis Hayes", "23", "7.6 ft", "USA", "Bronze");
var p2 = new Athlete("Chucky Atkins", "31", "6.6 ft", "USA", "Gold");

//JG: Use console.log actually show the value
console.log(p1.introduce());
console.log(p2.introduce());



// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message. 
// It will also add a property unique to this type of athlete.
// 
// You get to decide how to define these.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?, preferred brand
// 
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
// 
// The last property, preferred brand, is the one I added.
// 
// Method below returns 'Splash splash splash!'
// 
// s1.swim();
function GolfPlayer(name, age, country, gender, professional, record) {
	//JG: I didn't cover this in class, so I'm covering it here.
	//JG: The __proto__ property is how you assign values up the prototype chain.
	this.__proto__.name = name;
	this.__proto__.age = age;
	this.__proto__.country = country;
	this.gender = gender;
	this.professional = professional;
	this.bestRecord = record;

	this.playerInfo = function() {
		//JG: Try to return values instead of using console.log
		//JG: I'm using a trick with arrays to split the string into multiple lines
		return [
			"Player's Information",
			"\n",
			"Name: ",
			this.name,
			"\n",
			"Age: ",
			this.age,
			"\n",
			"Country of Origin: ",
			this.country,
			"\n",
			"Gender: ",
			this.gender,
			"\n",
			"Professional: ",
			this.professional,
			"\n",
			"Best Record: ",
			this.bestRecord,
			"\n"
		].join('');
	}
}

//JG: You need these two lines to get inheritance working
GolfPlayer.prototype = new Athlete();
GolfPlayer.prototype.constructor = Athlete;

//JG: You already used "var" on p1 up above
//JG: I'm renaming this to p3
var p3 = new GolfPlayer("Tiger Woods", "38", "USA", "Male", "true", "-13");
console.log(p3.playerInfo());