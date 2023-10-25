// assignment 1 - variables
const fruit = "Orange";
console.log("ASSIGNMENT 1 - VARIABLES");
console.log("The fruit is ", fruit);

// assignment 2 - math
let age = 28;
let year = 2023;
console.log("\nASSIGNMENT 2 - MATH");
console.log("Task 1: 28+3.5=", age + 3.5);
console.log("Task 2: 2023-1969=", year - 1969);
console.log("Task 3: 65/240=", 65 / 240);
console.log("Task 4: 0.2708*100=", 0.2708 * 100);

// assignment 3 - string-functions
console.log("\nASSIGNMENT 3 - STRING-FUNCTIONS");
console.log("ToUpperCase-function: " + "Amanda Jonört".toUpperCase());
console.log("Trim-function: " + "    Remove whitespace   ".trim());
console.log(
  "Length-function",
  "How many characters long is this string?".length
);

// assignment 4 - conditional statetments
console.log("\nASSIGNMENT 4 - CONDITIONAL STATEMENTS");
console.log("Check the Speed of the car");
const carSpeed = 85;

if (carSpeed > 100) {
  console.log("Slow Down!");
} else {
  console.log("Carry on.");
}

// assignment 5 - booleans
console.log("\nASSIGNMENT 5 - BOOLEANS");
console.log("Task 1");

const wordCount = 0;
console.log("wordCount: ", wordCount);
if (wordCount == 0) {
  console.log("Get writing!");
} else {
  console.log("Your blog post has enough characters, go ahead and post.");
}

console.log("\nTask 2");
const currentTemperature = 15;
const goneForARun = false;
console.log("Go for a run!");
if (currentTemperature < 10 && goneForARun == true) {
  console.log("You went for a run, god job!");
} else {
  console.log("You didn't go for a run. Maybe next time.");
}

console.log("\nTask 3");
const theName = "Mary";
console.log("Checking the length of a name");

if (theName.length >= 10) {
  console.log("You have a long name!");
} else if (theName.length <= 5) {
  console.log("You have a short name!");
} else {
  console.log("You have a medium length name!");
}
// assignment 6 - functions
console.log("\nASSIGNMENT 6 - FUNCTIONS");
console.log("Task 1 - date-function");
const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};
console.log("Klockan är: ", printCurrentTime());

console.log("\nTask 2 - print-function");
function printMyName() {
  console.log("Amanda");
}
printMyName();
printMyName();

console.log("\nTask 3 - greeting-function");
function printGreeting(greetingName) {
  console.log("Hello " + greetingName);
}
printGreeting("Bob");
printGreeting("Sue");

console.log("\nTask 4 - multiply-function");
function multiply(a, b) {
  return a * b;
}
const first = multiply(2, 2);
console.log("Första multiplikation: 2*2=", first);

const second = multiply(100, 4);
console.log("Andra multiplikation: 100*4=", second);

console.log("\nTask 5 - boolean-function");
function warmEnough(currentTemperature) {
  if (currentTemperature > 10) {
    return true;
  } else {
    return false;
  }
}
console.log("Should I go for a run today? It's 15 degrees celsius outside.");
if (warmEnough(15)) {
  console.log("Go for a run!");
} else {
  console.log("It's too cold, stay inside.");
}

console.log("\nSTRETCH-GOAL");
console.log("FizzBuzz-Printer");
/* variablen börjar på värdet 1 och för varje iteration i loopen så ökar den med 1 och printas ut, 
som en counter. 
villkoret är:
skriv ut värdet från 1 till 100 MEN OM värdet är gångerbart med 3 och/eller 5, gör detta:
(värdet/variabeln går igenom en jämföring i varje iteration) 
om värdet är gångerbart med BÅDE 3 och 5 skriv ut FizzBuzz
om värdet är gångerbart med 3 skriv ut Fizz
om värdet är gångerbart med 5 skriv ut Buzz
annars - skriv ut värdet som det är
*/
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
