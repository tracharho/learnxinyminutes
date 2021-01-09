//Boolean negation

tru = !false;
alert(tru);

//String and number concatenation
let thisIsAString = "1, 2, " + 3;
alert(thisIsAString);

//Letter access
let letter = "This is a string".charAt(0);

//substring for larger pieces
let substring = "Hello World!".substring(0,5);

var myArray = ["Hello", 45, true];

myArray.push("World");
myArray.length; // = 4

myArray.unshift(3); // Add as the first element myArray = [3, "Hello", 45, true, "World"]
myArray.push(3); // Add as the last element 
someVar = myArray.pop();
someVar = myArray.shift;

var count = 1;
undefined
alert(count);
undefined
while (true) {
  alert(1);
}
outer:
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i==5 && j==5) {
      break outer;
    }
  }
}
alert(i)
alert(j)
var descr = "";
var person = {fname:"Paul",lname:"Ken",age:18};
for (var k in person) {
  descr += person[k] + " ";
}
alert(descr);
console.log(descr);

//python equivalent for letter in "Word":
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets) {
    myPets += " ";
}

//Switch statements in place of if/else. Checks with the === operator
grade = 'B';
switch (grade) {
    case 'A':
        console.log("Great Job!");
        break;
    case 'B':
        console.log("Ok job");
        break;
    case 'C':
        console.log("Meh");
        break;
    default: 
        console.log("...");
        break;
}

// Note that the value to be returned must start on the same line as the
// `return` keyword, otherwise you'll always return `undefined` due to
// automatic semicolon insertion. Watch out for this when using Allman style.
function myFunction(){
    return // <- semicolon automatically inserted here
    {thisIsAn: 'object literal'};
}
myFunction(); // = undefined

// JavaScript has function scope; functions get their own scope but other blocks
// do not.
if (true){
    var i = 5;
}
i; // = 5 - not undefined as you'd expect in a block-scoped language


// One of JavaScript's most powerful features is closures. If a function is
// defined inside another function, the inner function has access to all the
// outer function's variables, even after the outer function exits.
function sayHelloInFiveSeconds(name){
    var prompt = "Hello, " + name + "!";
    // Inner functions are put in the local scope by default, as if they were
    // declared with `var`.
    function inner(){
        alert(prompt);
    }
    setTimeout(inner, 5000);
    // setTimeout is asynchronous, so the sayHelloInFiveSeconds function will
    // exit immediately, and setTimeout will call inner afterwards. However,
    // because inner is "closed over" sayHelloInFiveSeconds, inner still has
    // access to the `prompt` variable when it is finally called.
}
sayHelloInFiveSeconds("Adam"); // CAN CREATE AND CALL FUNCTIONS INSIDE OF FUNCTIONS

//Objects can contain functions.