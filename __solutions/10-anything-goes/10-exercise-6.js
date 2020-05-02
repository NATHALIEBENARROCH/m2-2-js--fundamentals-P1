// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for 
// Armstrong numbers.

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {
    let armstrongNumbers = [];

    for (let i = num1; i <= num2; i++) {
        let digits = i.toString().split('');
        let sum = 0;
        digits.forEach(function(digit) {
            let product = 1;
            for (let x = 0; x < digits.length; x++) {
                product *= digit;
            }
            sum += product;
        });
        if (sum === i) {
            armstrongNumbers.push(i);
        }
    }

    return armstrongNumbers;
}

console.log(identifyArmstrongNumbers(0, 999999));