/** @format */

"use strict"; // Treat all JS code as newer versions
/**
 * Datatypes in JavaScript
 *
 * 1. Primitive Types
 *    - String
 *    - Number
 *    - BigInt
 *    - Symbol
 *    - Boolean
 *    - Null
 *    - Undefined
 *
 * 2. Reference Types
 *    - Object
 *    - Array
 *    - Function
 *   - Date
 *   - RegExp
 *        ... etc.
 *
 */
// Ex of Primitive Types
let name = "Anand"; // String
let age = 25; // Number
let ageInDec = 25.5; // Number (Decimal)
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
let symbolValue = Symbol("description"); // Symbol
let isLoggedIn = false; // Boolean
let state = null; // Null
let city; // Undefined
console.log(typeof name); // typeof is a JS operator that checks the datatype of a variable
console.log(typeof state); // output: object (this is a known quirk in JS, null is of type 'object')
console.log(typeof city); // output: undefined
console.table({
  name,
  age,
  ageInDec,
  bigIntValue,
  symbolValue,
  isLoggedIn,
  state,
  city,
}); // Displaying all variables in a table format
//Ex of Reference Types
// 1. Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr); // typeof will return 'object' for arrays

// 2. Object
let person = {
  name: "Anand",
  age: 25,
  isLoggedIn: false,
};
console.log(person);
console.log(typeof person); // typeof will return 'object' for objects

// 3. Function
function greet() {
  return "Hello, World!";
}
console.log(greet());
console.log(typeof greet); // typeof will return 'function' for functions

// Practical Example Combining Multiple Data Types

// 1. Defining an object with multiple data types
const userProfile = {
  name: "Alex", // String
  followers: 1999, // Number
  isVerified: true, // Boolean
  latestPost: null, // Null
  plan: undefined, // Undefined
  tags: ["music", "developer", "art"], // Object (Array)
  getProfileSummary: function () {
    // Object (Function)
    return `${this.name} has ${this.followers} followers.`;
  },
};

// 2. Using the data to produce results
console.log("----- User Profile Data -----");
console.log(userProfile);

console.log("\n----- Profile Summary -----");
console.log(userProfile.getProfileSummary());

console.log("\n----- Verification Check -----");
if (userProfile.isVerified) {
  console.log("This user is verified.");
} else {
  console.log("This user is not verified.");
}

console.log("\n----- First Tag -----");
console.log("The user's first tag is:", userProfile.tags[0]);
console.table(userProfile); // Displaying the userProfile object in a table format

/**
 * Conversion between Data Types
 *
 * 1. Implicit Conversion (Type Coercion)
 *    - Happens automatically by JavaScript
 *    - Example: String + Number results in String
 *
 * 2. Explicit Conversion
 *    - Done manually by the developer
 *    - Using functions like String(), Number(), Boolean(), etc.
 *
 */
// Implicit Conversion
let result1 = "The answer is " + 42; // Number 42 is coerced to String
console.log(result1); // "The answer is 42"
console.log(typeof result1); // String

let result2 = "5" * 2; // String "5" is coerced to Number
console.log(result2); // 10
console.log(typeof result2); // Number

// Explicit Conversion
let strNum = "123";
let convertedNum = Number(strNum); // Converting String to Number
console.log(convertedNum); // 123
console.log(typeof convertedNum); // Number

let strNumInvalid = "123abc";
let convertedNumInvalid = Number(strNumInvalid); // Converting invalid String to Number
console.log(convertedNumInvalid); // NaN (Not a Number)
console.log(typeof convertedNumInvalid); // Number

let strNumFloat = "123.45";
let convertedNumFloat = Number(strNumFloat); // Converting String to Number (float)
console.log(convertedNumFloat); // 123.45
console.log(typeof convertedNumFloat); // Number

let num = 456;
let convertedStr = String(num); // Converting Number to String
console.log(convertedStr); // "456"
console.log(typeof convertedStr); // String

let boolValue = Boolean(1); // Converting Number to Boolean
console.log(boolValue); // true
console.log(typeof boolValue); // Boolean

let nullValue = null;
let convertedUndefined = String(nullValue); // Converting Null to String
console.log(convertedUndefined); // "null"
console.log(typeof convertedUndefined); // String

let undefinedValue;
let convertedNull = Number(undefinedValue); // Converting Undefined to Number
console.log(convertedNull); // NaN (Not a Number)
console.log(typeof convertedNull); // Number

// Note: Be cautious with implicit conversions as they can lead to unexpected results.  Always prefer explicit conversions for clarity.

// Summary Table of Conversions
console.table([
  { Original: "The answer is " + 42, Type: typeof result1, Converted: result1 },
  { Original: '"5" * 2', Type: typeof result2, Converted: result2 },
  { Original: strNum, Type: typeof strNum, Converted: convertedNum },
  { Original: num, Type: typeof num, Converted: convertedStr },
  { Original: 1, Type: typeof boolValue, Converted: boolValue },
  {
    Original: nullValue,
    Type: typeof nullValue,
    Converted: convertedUndefined,
  },
  {
    Original: undefinedValue,
    Type: typeof undefinedValue,
    Converted: convertedNull,
  },
]);
