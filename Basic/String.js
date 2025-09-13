/**
 * String Declaration in JavaScript
 *
 * 1. Single Quotes (' ')
 * 2. Double Quotes (" ")
 * 3. Template Literals (``) - Introduced in ES6, allows embedding expressions
 *
 * Strings are used to represent text and are one of the most commonly used data types in JavaScript.
 *
 * Template literals provide an easy way to create multi-line strings and embed variables or expressions using `${}` syntax.
 *
 * Example:
 * let name = "John";
 * let greeting = `Hello, ${name}!`;
 * console.log(greeting); // Output: Hello, John!
 *
 * @format
 */

let singleQuote = "Hello";
let doubleQuote = "World";
let templateLiteral = `Hello, World!`; // Can embed variables

/**
 * Properties and Methods
 */
const sampleString = "JavaScript is fun!";

// Length Property
console.log("Length of sampleString:", sampleString.length); // 19

// toUpperCase() Method
console.log("Uppercase:", sampleString.toUpperCase()); // "JAVASCRIPT IS FUN!"

// toLowerCase() Method
console.log("Lowercase:", sampleString.toLowerCase()); // "javascript is fun!"

// includes() Method
console.log("Includes 'fun':", sampleString.includes("fun")); // true

// replace() Method
const newString = sampleString.replace("fun", "awesome");
console.log("After replace:", newString); // "JavaScript is awesome!"

// split() Method
const wordsArray = sampleString.split(" ");
console.log("Split into words:", wordsArray); // ["JavaScript", "is", "fun!"]

// trim() Method
const stringWithSpaces = "   Hello World!   ";
console.log("Trimmed string:", stringWithSpaces.trim()); // "Hello World!"

// charAt() Method
console.log("Character at index 0:", sampleString.charAt(0)); // "J"

// indexOf() Method
console.log("Index of 'is':", sampleString.indexOf("is")); // 11

// Template Literal with Expression
let name = "Anand";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting); // "Hello, Anand! Welcome to JavaScript."

// Multi-line String using Template Literal
let multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);

/**
 * Escape Sequences
 */
let escapeExample = 'He said, "JavaScript is awesome!"\nLet\'s learn it.';
console.log(escapeExample);

console.table({
  singleQuote,
  doubleQuote,
  templateLiteral,
  sampleString,
  newString,
  wordsArray,
  stringWithSpaces,
  escapeExample,
}); // Displaying all variables in a table format
