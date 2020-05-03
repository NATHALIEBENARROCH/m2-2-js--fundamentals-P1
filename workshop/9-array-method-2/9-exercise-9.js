/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

// HINT: Check the `Math` built-in object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const arrayOfGrades = [89, 76, 42, 98, 32];
// get an array and calculate the sum of everything in it
function calculateSumOfGrades(array) {
  let sum = array.reduce(function (sum, grade) {
    return sum + grade;
  }, 0);
  // this 0 points to the initial value of function being executed
  return sum;
}
// calculate the amount of grades in the array
function calculateNumberOfGrade(array) {
  return array.length;
}
// put everything together
function calculateAverage(array) {
  const sum = calculateSumOfGrades(array);
  const numOfGrades = calculateNumberOfGrade(array);
  const average = Math.round(sum / numOfGrades);
  return average;
}
console.log(calculateAverage([89, 76, 42, 98, 32]));
