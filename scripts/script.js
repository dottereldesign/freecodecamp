// Copy Line Up/Down - On Windows: Shift + Alt + Up/Down
// camelCase
// Colonize extension - Alt + Enter will insert semi-colon and move to next line.

// Data Types and Variables
var myName = "Beau";
myName = 8;
let ourName = "freeCodeCamp";
const pi = 3.14;

// Storing Values with Assignment Operator
var a;
var b = 2;
console.log(a);

a = 7;
b = a;
console.log(a);

// Initilizing Variables with the Assignment Operator
var a = 9;
console.log(a);

// Uninitilized Variables
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
console.log(a);
console.log(b);
console.log(c);

var sentence = "Hello, my name is";
sentence = sentence + " Jamie.";
console.log(sentence);

// Adding Numbers
var sum = 10 + 10;
console.log(sum);

// Subtracting Numbers
var difference = 45 - 33;
console.log(difference);

// Multiplying Numbers
var product = 8 * 10;
console.log(product);

// Diving Numbers
var quotient = 66 / 33;
console.log(quotient);

// Incrementing Numbers
var myVar = 87;
myVar++;
console.log(myVar);

// Decrementing Numbers
var myVar = 11;
myVar--;
console.log(myVar);

// Decimal Numbers
var ourDecimal = 5.7;
console.log(ourDecimal);
var myDecimal = 0.009;
console.log(myDecimal);

// Multiply Decimals
var product = 2.0 * 2.5;
console.log(product);

// Divide Decimals
var quotient = 4.4 / 2.0;
console.log(quotient);

// Finding a Remainder
var remainder;
remainder = 11 % 3;
console.log(remainder);

// Compound Assignment with Augmented Addition
var a = 3;
var b = 17;
var c = 12;
a += 12;
b += 9;
c += 7;
console.log(a);
console.log(b);
console.log(c);

// Compound Assignment with Augmented Subtration
var a = 11;
var b = 9;
var c = 3;
a -= 6;
b -= 15;
c -= 1;
console.log(a);
console.log(b);
console.log(c);

// Compound Assignment with Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;
a *= 5;
b *= 3;
c *= 10;
console.log(a);
console.log(b);
console.log(c);

// Compound Assignment with Augmented Division
var a = 488;
var b = 108;
var c = 33;
a /= 12;
b /= 4;
c /= 11;
console.log(a);
console.log(b);
console.log(c);

// Declare String Variables
var firstName = "Alan";
var lastName = "Turing";
firstName = "Jamie";
lastName = "Wilson";
console.log(firstName, lastName);

// Quoting Strings with Single Quotes
var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

// Escape Sequences in Strings
/*
     CODE    OUTPUT
     \'      single quote
     \"      double quote
     \\      backslash
     \n      newline
     \r      carriage return
     \t      tab
     \b      backspace
     \f      form feed
*/

// Concatenating Strings with Plus Operator
var ourStr = "I come first." + "I come second.";
var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// Concatenating Strings with Plus Equals Operator
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

// Constructing Strings with Variables
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
var myName = "Jamie";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// Appending Variables to Strings
var anAdjective = "awesome!";
var ourStr = "freeCodecamp is ";
ourStr += anAdjective;
console.log(ourStr);

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// Find the Length of a String
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

// Bracket Notation to Find First Character in String
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// String Immutability
var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr);

// Bracket Notation to Find Nth Character in String
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);
