/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q7
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

function isNameOverFourCharacters(name) {
  return name.length > 4;
}
function findLong(lst) {
  // arr.filter(callback(element))
  // callback is a funciton that we run on all element of the array
  // element is the current member of the array
  // the call back will give true or false
  // if true we keep it in the array
  return lst.filter(isNameOverFourCharacters);
}

function greet(name) {
  console.log(`Hello ${name}`);
}

function greetLong(lst) {
  return findLong(lst).forEach(greet);
}

greetLong(["Scott", "Bob", "Ric", "Jim"]);
// -------------------------------------------------------------------------
