/** @format */
/**
 * The Stack: An organized region of memory that works on a "Last-In, First-Out" (LIFO) basis. It's used for static data, which is data where the size is known at compile time. This includes:
 * Primitive types (Number, String, Boolean, null, undefined, Symbol, BigInt).
 * References that point to objects in the Heap.
 * Function calls (each call creates a "stack frame").
 * The Heap: A large, less organized region of memory used for dynamic data, where the size is not known at compile time. This includes all Objects, such as arrays, functions, and plain objects.
 *
 */

/**
 * Primitive Types (Stack Allocation)
 */
let age = 30; // The value 30 is stored on the Stack
let name = "Alex"; // The value "Alex" is stored on the Stack
let isVerified = true; // The value true is stored on the Stack

let newAge = age; // The value 30 is COPIED and stored for newAge
newAge = 31;

console.log(age); // 30 (The original is unaffected)
console.log(newAge); // 31

//Object Types (Heap Allocation)

// A reference to the object is created on the Stack.
// The object itself { name: "Bob", city: "Delhi" } is stored on the Heap.
let person = {
  name: "Bob",
  city: "Delhi",
};

// anotherPerson gets a COPY of the reference, not the object.
// Both variables now point to the SAME object on the Heap.
let anotherPerson = person;

// We are modifying the object on the Heap via the anotherPerson reference.
anotherPerson.name = "Charlie";

// Since both variables point to the same object, the change is reflected everywhere.
console.log(person.name); // 'Charlie'
