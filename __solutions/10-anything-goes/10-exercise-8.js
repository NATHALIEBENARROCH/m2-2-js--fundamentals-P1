// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q8
// - filter(lst, func) returns a list with all the elements of lst that does not satisfy f removed
// - filter(lst, func) has fewer elements than lst
// - if lst_ = filter(lst, f) and x is an element of lst_ it means that:
//      x is an element of lst
//      f(x) is true
//
// Example:
// function isEven(x) {return x % 2 === 0;}
// filter([1, 2, 3, 4, 5], isEven) returns [2,4];

function filter(lst, func) {
    // lst is an array and f is a function
    // func takes one argument and returns a boolean (true or false)
    const newArray = [];
    for (let i = 0; i < lst.length; i++) {
        if (func(lst[i])) {
            newArray.push(lst[i]);
        }
    }

    return newArray;
}
// -------------------------------------------------------------------------
function keepLong(str) { return str.length > 5 }
console.log('Q8: ', filter(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'], keepLong));