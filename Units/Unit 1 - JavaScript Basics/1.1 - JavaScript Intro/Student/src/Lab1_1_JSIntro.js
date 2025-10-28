/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Christopher Beceiro");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
console.log(favoriteFood);
favoriteFood = "Pizza"
console.log(favoriteFood);

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello ";
console.log("Value: " + mystery + "Data Type: " + typeof mystery);
mystery = 68;
console.log("Value: " + mystery + "Data Type: " + typeof mystery);

// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";
// schoolName = "Belen"

// TODO 5: Create three valid camelCase variables and print them
let firstName = "Christopher";
let lastName = "Beceiro";
let birthYear = "2008";
console.log(firstName);
console.log(lastName);
console.log(birthYear); 


// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals
let age = 16;
console.log(`I am ${age} years old.`)

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab? 
   I learned how to declare variables using let and const, and how to print to the console.
   2. What challenges did you encounter, and how did you solve them?
   I had trouble remembering the syntax for template literals, but I looked it up and practiced using them.
   3. Where else could this programming concept be useful?
   Understanding variables and data types is fundamental in programming and can be applied in any coding project, from web development to data analysis.
   =========================================================== */
 let a = "7";
 let b = "3";

 console.log(Number(a) + Number(b)); //10

 let width = 3;
 let height = 4;
 let area = width * height;
 let perimeter = 2 * (width + height);

 console.log (`The area of the rectangle is ${area}`)
 console.log (`The perimeter of the rectangle is ${perimeter}`)
 console.log(width * height); //12
 console.log(2 * width + 2 * height); // 14