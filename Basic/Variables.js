/** @format */
// Let
// We declare the variable 'score' and give it an initial value of 0.
let score = 0;
name = "Anand"; // Implicit global variable (not recommended)
console.log(score); // This will print 0

// The user scores some points, so we update the value.
score = 100;
console.log(score); // This will now print 100

// Const
// We declare the constant 'birthday' and assign it a value.
const birthday = "05/20/1990";
console.log(birthday); // This will print "05/20/1990"

// If we try to change it...
// birthday = "01/01/2000"; // This line will cause an error! This is not allowed with const.
// console.log(birthday); // This line will not be executed due to the error above

// Var
// We declare the variable 'age' using var and give it an initial value of 25.
var age = 25;
console.log(age); // This will print 25

// The user has a birthday, so we update the value.
age = 26;
console.log(age); // This will now print 26

// Note: Using 'var' is generally discouraged in modern JavaScript due to its function-scoping behavior.
// It's better to use 'let' and 'const' for block-scoping and immutability respectively.

console.table({ score, birthday, age }); // Displaying all variables in a table format
console.table([score, birthday, age]); // Displaying all variables in an array format
