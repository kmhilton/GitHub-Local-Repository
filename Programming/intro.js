//alert("hello")
var message = "Hello"; //message is a string
var x = 27; //x is a numeric
var temps = [14,32,36,40]; //this is an array and to note 36 it would be a 2. Arrays are associated with one another
var person = {  //person is an object.
  first: "Nate",  //first and last is a property and Nate is a string
  last: "White",
  age: 23,
  address: {
    city: "Fort Collins",
    zip: 80521
  },
};

//if(person.address.zip ===80521) {
  //console.log("Hello" + person.first);
//}

if(person.age >= 21 && person.age < 65) {
  console.log("Hello " + person.first + " -->You can now DRINK!");
} else if (person.age>=65) {
  console.log("discount time");
} else {
  console.log("you must leave"); //log is a function console is officially an object
}


//FUNCTIONS!

if(person.age >= 21 && person.age < 65) {
  greeting(person);
} else if (person.age>=65) {
  console.log("discount time");
} else {
  console.log("you must leave");
}

function greeting(customer) {
  console.log("Hello");
}

//jquery is a library written in javascript to make coding a website easier

switch (age) {  //this is an optimized if/else statement
  case 21:
    console.log("I'm 21");
    break;
  case 24:
    console.log("I'm 24");
    break;
  case 30:
    console.log("I'm 30");
    break;
  default:
    console.log("I'm " + age);
    break;
}
//console.log(person.address.city);

//introducing while

var x = 0;
while(x < 10) {
  console.log(x);
  x = x + 1;
}


function countHoles(str) {//str = "hello"
  var holeCount = 0;
  var letters = str.split(""); // ["h", "e", "l", "l", "o"];

  letters.forEach(function(char){
    if(lookup[char]) {
      holeCount += lookup[char];
    }
  });
  return holeCount;
}
    
