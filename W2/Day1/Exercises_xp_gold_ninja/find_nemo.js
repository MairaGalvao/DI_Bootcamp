// Exercise 1

let sentence = prompt("Write a sentence containing the word Nemo");

let sentence_separated = sentence.split(' ');


sentence_separated.includes("Nemo")

let find_word = sentence_separated.lastIndexOf("Nemo")
let phrase =  "I found Nemo at " + find_word;

if (find_word == -1){
	console.log("I can not find Nemo")
}

else{
	console.log(phrase)
};


// Exercise 2

let c;
let a = 34;
let b = 21;
a = 2;
a + b;

let calc = console.log(3 + 4 + '5');

// calc would be 75 as a string. It calculates first 3+4 then it adds 5 as a string.
// a+b = 23
// c is undefined as we did not give any value to it


// Exercise 3

let listNumbers = prompt("Write a string of numbers");
let stringNumers = listNumbers.split(' ');

let mySum = 0	
for (let i = 0 ; i < stringNumers.length; i++) {
let currentNumber = parseInt(stringNumers[i]);
mySum = mySum+currentNumber; }
console.log(mySum)

// Exercise 4

let usersNumber = prompt("Type a number between 0 to 10");
let boom_word = "boom"
const b_letter = "b"
const m_letter = "m"
if (usersNumber < 2){
	console.log(boom_word)
}
if (usersNumber > 2){
	let many_os = "o".repeat(usersNumber)
	let boom_with_os = b_letter.concat(many_os)  
	let complete_large_boom = boom_with_os.concat(m_letter)
	console.log(complete_large_boom)
};

if (usersNumber % 2 === 0){
	let boom_explanation = boom_word.concat("!")
	console.log(boom_explanation)
};


if (usersNumber % 5 === 0){
let boom_all_caps =  boom_word.toUpperCase()
console.log(boom_all_caps)};

if (usersNumber % 5 === 0 && usersNumber % 2 === 0){
let boom_caps_ =  boom_word.toUpperCase()
let boom_caps_explanation = boom_caps_.concat("!")
console.log(boom_caps_explanation)};
