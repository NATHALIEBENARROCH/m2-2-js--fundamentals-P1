// Q1
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
    let greaterNumber;

    if (num1 > num2) {
        greaterNumber = num1;
    } else {
        greaterNumber = num2;
    }

    console.log(`${greaterNumber} is the greater number`);
}

// Call the function
max(12, 43);

// Call it a few more times with other numbers.