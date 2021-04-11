// EXERCISE 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1. removing the first item from the array  
fruits.shift(); 
console.log(fruits); 

//2. sorting out the array in alphabetical order
fruits.sort();
console.log(fruits);

//3. adding an item in the array
fruits.push("kiwi");
console.log(fruits);

// 4.Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(0, 1);
console.log(fruits);

// 5.Sort the array in reverse order
fruits.reverse();
console.log(fruits);


// EXERCISE 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits)

