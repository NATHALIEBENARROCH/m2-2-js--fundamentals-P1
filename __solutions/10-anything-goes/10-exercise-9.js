// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q9
// - every(lst, func) returns a true if func returns true for every element of lst
//
// Example:
// function isEven(num) { return num % 2 === 0 }
// every([2,4,12], isEven) returns true
// every([2,3,12], isEven) returns false

function every(lst, func) {
    // lst is an array and f is a function
    // func takes 1 argument and returns a boolean
    let verification = true;
    for (let i = 0; i < lst.length; i++) {
        if (verification) {
            verification = func(lst[i]);
        }
    }

    return verification;
}
// -------------------------------------------------------------------------
function isEven(num) { return num % 2 === 0 }
console.log('Q9: ', every([2, 42, 540, 8, 64], isEven));
console.log('Q9: ', every([2, 42, 540, 3, 64], isEven));