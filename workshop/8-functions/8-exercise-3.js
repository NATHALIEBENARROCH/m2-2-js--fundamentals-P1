// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {
  let additionGrades = a + b + c + d + e;
  return Math.round(additionGrades / 5);
}
console.log(calculateAverage(76, 60, 83, 100, 78));
