function getTheLongestWordLength (wordArray) {
       
    // find the length of the biggest word in the array:
    let lengthOfBiggestWord = 0;

    for (let i = 0; i < wordArray.length; i ++){
        let word = wordArray[i];
        if (word.length > lengthOfBiggestWord){
            lengthOfBiggestWord = word.length
        }     
    }
    return lengthOfBiggestWord
}
    
function creatingHeaderFooter (lengthOfBiggestWord) {
    let header = "*".repeat(lengthOfBiggestWord + 4)
    return header
}

function displayingFrame(lengthOfBiggestWord, wordArray){
    for (let i=0; i < wordArray.length ; i++){
        let word = wordArray[i];
        let difference = lengthOfBiggestWord - word.length;
        let spaces = " ".repeat(difference)
        console.log(`* ${word} ${spaces}*`)
    }
} 

let wordsUser = prompt("Type few different words (separated by commas)")
let wordArray = wordsUser.split(", ") 
let longestLenght = getTheLongestWordLength(wordArray)
let HearderFooter = creatingHeaderFooter(longestLenght)
console.log(HearderFooter)
displayingFrame(longestLenght, wordArray)
console.log(HearderFooter)
