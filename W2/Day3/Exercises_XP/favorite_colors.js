// Exercise 1 - favorite colors

// let colors = ["blue", "black", "white", "purple", "pink", "green", "pink",
// "purple", "gray", "yellow", "green", "red", "gray", "violet", "brown", "silver",
// "beige", "blue", "black", "white", "purple", "pink", "green", "pink", "purple", 
// "gray", "green", "red", "gray", "violet", "magenta", "yellow", "purple", "gray",
// "green", "red", "gray", "violet", "magenta", "green", "beige", "blue", "black",
// "white", "black", "beige", "blue", "magenta", "green", "red", "gray", "purple"]

// for (let i = 0; i < colors.length; i ++) {
//     let ordinary = i + 1
//     let remainder_10 = ordinary % 10; // the remainder of the division by 10
//     let remainder_100 = ordinary % 100; //the remainder of the division by 100
    
//     if (remainder_10 == 1 && remainder_100 != 11) { // excluding cases where number ends with 11
//         console.log(`My ${ordinary+"st"} color is ${colors[i]}`);
//     }
//     else if (remainder_10 == 2 && remainder_100 != 12) { // excluding cases where number ends with 12
//         console.log(`My ${ordinary+"nd"} color is ${colors[i]}`);
//     }
//     else if (remainder_10 == 3 && remainder_100 != 13) { // excluding cases where number ends with 13
//         console.log(`My ${ordinary+"rd"} color is ${colors[i]}`);
//     }
//     else console.log(`My ${ordinary+"th"} color is ${colors[i]}`)
//     }




// Exercise 7 Secret Group

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// let societyName = ""
// names.sort()

// for (let i = 0; i < names.length; i ++) {
//     let name = names[i]
//     let letter = name[0]
//     societyName = societyName.concat(letter)
//     }
  
// console.log(societyName)
