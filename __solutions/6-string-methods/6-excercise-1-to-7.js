// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const moneyBag = 342345645674563452412356756712313346456123;
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks =
  'Mr. Meeseeks, Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

// Q1
// How many names does Morty have? (use grandson)
const mortyNamesArray = grandson.split(' ');
const numberOfNames = mortyNamesArray.length;
console.log(`A1) Morty has ${numberOfNames} names`);

// Q2
// Convert the alternateRicks string to an array. Console that array.
const alternateRicksArray = alternateRicks.split(', '); //separated on command+space
console.log('A2) ', alternateRicksArray);

// Q3
// How many Ricks have been named in alternateRicks?
let numberOfRicks = 0;
for (let i = 0; i < alternateRicksArray.length; i++) {
  //Check to see if it is a real Rick //Added Mr. Meeseeks to alternateRicks for testing
  if (alternateRicksArray[i].includes('Rick')) {
    numberOfRicks += 1;
  }
}
console.log(`A3) ${numberOfRicks} Ricks have been named in alternateRicks`);

// Q4
// How many characters are there in rickSaying (without spaces)?
let ricksayingArray = rickSaying.split('');
let characters = 0;
for (let i = 0; i < ricksayingArray.length; i++) {
  //do not include spaces
  if (ricksayingArray[i] !== ' ') {
    characters += 1;
  }
}
console.log(`A4) There are ${characters} characters in rickSaying`);

// Q5
// Morty doesn't actually have a middle name. Console Morty's name without "Antoine".
console.log(`A5) ${mortyNamesArray[0]} ${mortyNamesArray[2]}`); //without string methods

const actualMortyName = grandson.replace('Antoine ', ''); //include one of the spaces
console.log(`A5) ${actualMortyName}`);

// Q6
// How many digits are there in moneyBag?
//Hacky way since to toString() returns a scientific notation for extremely large values
const digits = moneyBag.toString().split('e+'); //split on the power
console.log('A6)', parseInt(digits[1]) + 1); //add 1 to power to get no of digits

// Q7
// Decode and console. the secret!

// To do so, you will need to remove all of the notCode words.
let decodedMsg = secret;
for (let i = 0; i < notCode.length; i++) {
  decodedMsg = decodedMsg.replace(notCode[i], '');
}
console.log('A7)', decodedMsg);

// Q8 (challenge)
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.
let actualEnemies = enemies.replace('Scary Terry, ', '');
console.log('A8)', actualEnemies);
