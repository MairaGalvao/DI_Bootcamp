// // Exercise 1 - Simple If/Else Statement

let x = 56239
let y = 23648

if (x > y){
	console.log("x is the biggest number")
}
 
// Exercise 2 - Chihuahua

let newDog = "Chihuahua"
console.log(newDog.length)

console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if(newDog == "Chihuahua"){
	 console.log("I love Chihuahuas, it’s my favorite dog breed")
}

else{
	console.log("I dont care, I prefer cats")
}


// Exercise 3 - Even Or Odd

let usersNumber = prompt("Type a number between 0 to 10")
if (usersNumber % 2 === 0){
	console.log( usersNumber + " is an even number")
}

if (usersNumber % 2 !== 0){
	console.log( usersNumber + "  x is an odd number")
}

// Exercise 4 - Switch Case

let whatHappens;
let direction;

switch (direction) {
    case "forward":
        break;
        whatHappens = "you encounter a monster";
    case "back":
        whatHappens = "you arrived home";
        break;
        break;
    case "right":
        whatHappens = "you found a river";
        break;
    case "left":
        break;
        whatHappens = "you run into a troll";
        break;
    default:
        whatHappens = "please enter a valid direction";
}


// Answers

// What is the returned value when the value of the direction variable is “forward”
// =It is going to give an error as there is a break before everything, and nothing will be displayed.

// What is the returned value when the value of the direction variable is “back”
// =the variable whatHappens will be "you arrived home", but nothing will be displayed as
// there is no console.log, plus there is no need of two breaks after.
// 
// What is the returned value when the value of the direction variable is “right”
// =the variable whatHappens will be "you found a river", but nothing will be displayed as
// there is no console.log.

// What is the returned value when the value of the direction variable is “left”
// =nothing will happen as there is a break before consoling the variable.


// Exercise 5 - Group Chat


let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

if (users.length == 0)  {
	console.log("no one is online")
}
if (users.length == 1)  {
	console.log(users[0] + " is online”")
}
if (users.length == 2)  {
	console.log(users[0] + users[1] + " are online")
}
if (users.length > 2)  {
	console.log(users[0] + users[1] + " are online")
	numberUsersNow = users.length -2
	console.log("There are " + numberUsersNow + " extra users")	





