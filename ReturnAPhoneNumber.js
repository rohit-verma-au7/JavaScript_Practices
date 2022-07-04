// **Problem statement **

// In this challenge, you have to define a function, createPhoneNumber, that accepts an array of 10 integers (between 0 and 9). It should return a string of those numbers in the form of a phone number.

// There are many solutions to this problem, but the aim of this exercise is to help you practice using the slice method of JavaScript. Try to figure out an approach using slice.

// Input

// An array containing 10 integers (0-9)

// Output

// A string of those numbers returned in the form of a phone number

// Sample input

// [1,2,3,4,5,6,7,8,9,0]

// Sample output

// (123) 456-7890

// Challenge # Take a close look and design a step-by-step algorithm before jumping on to the implementation.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
var test = arr.slice(1, 9);
console.log(test);
