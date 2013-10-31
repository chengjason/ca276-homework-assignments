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
// athlete.foo = "bar"
// athlete.method = function () {
// 
// }
athlete1.name = "Jason Cheng";
athlete1.height = "5.7 ft";
athlete1.age = "23";
athlete1.country = "USA";
athlete1.medals = ["Silver", "Bronze"];
athlete1.isOlympian = false;

athlete1.introduce = function(){
    return "Hello! My name is " + athlete1.name + " and I am from " + athlete1.country + ".";
}

athlete1.addMedal = athlete1.medals.push("Gold");



// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).


var athlete2 = {};
// athlete['foo'] = "bar"
// athlete['method'] = function () {
// 
// }

athlete2['name'] = "Jason Cheng";
athlete2['height'] = "5.7 ft";
athlete2['age'] = "23";
athlete2['country'] = "USA";
athlete2['medals'] = ["Silver", "Bronze"];
athlete2['isOlympian'] = false;

athlete2['introduce'] = function(){
    return "Hello! My name is " + athlete2['name'] + " and I am from " + athlete2['country'] + ".";
}

athlete2['addMedal'] = athlete2['medals'].push("Gold");




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
    

   introduce: function(){
     return "Hello! My name is " + this.name + " and I am from " + this.country + ".";
    }
 }

athlete3.addMedal = athlete3.medals.push("Gold");

// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html
function athlete(name, age, height, country, medals){
      this.name = name;
      this.age = age;
      this.height = height;
      this.country = country;
      this.medals = medals;

      this.present = function(){
         console.log( "Hello! My name is " + this.name + ".  I am " + this.age + " years old.");
      }
}
var p1 = new athlete("Jarvis Hayes", "23", "7.6 ft", "USA", "Bronze");
var p2 = new athlete("Chucky Atkins", "31", "6.6 ft", "USA", "Gold");

p1.present();
p2.present();



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
function golfPlayer(name, age, country, gender, professional, record){
     this.name = name;
     this.age = age;
     this.country = country;
     this.gender = gender;
     this.professional = professional;
	 this.bestRecord = record;

     this.playerInfo = function(){
         console.log("Player's Information" + "\n" + "Name: " + this.name +  "\n" + "Age: " + this.age + "\n" + "Country of Origin: " + this.country + "\n" + "Gender: " 
		 + this.gender + "\n" + "Professional: " +  this.professional + "\n" + "Best Record: " + this.bestRecord + "\n");
      }
     
}

var p1 = new golfPlayer("Tiger Woods", "38", "USA", "Male", "true", "-13");
p1.playerInfo();
