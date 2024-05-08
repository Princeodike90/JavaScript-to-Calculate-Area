//Create a function called calculateArea that takes the length and width of a rectangle as parameters and returns the area
function calculateArea(length, width) {
    // area = length x width
    var area = length * width;
    return area;
}

// Example:
var length = 5;
var width = 3;
var area = calculateArea(length, width);
console.log("The area of the rectangle is: " + area);

function reverseString(str) {
    var reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

// Example:
var inputString = "hello";
var reversed = reverseString(inputString);
console.log("The reversed string is: " + reversed);

//Write a JavaScript function named isEven that takes a number as input and returns true if the number is even (i.e. divisible by 2 without remainder), otherwise returns false.
console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false
console.log(isEven(0));  // Output: true

