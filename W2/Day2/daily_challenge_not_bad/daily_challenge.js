let sentence = "The movie is not that bad , it was great";
console.log(sentence)

let sentence_array = sentence.split(" ");
let wordNot = sentence_array.indexOf("not");
let wordBad = sentence_array.indexOf("bad") ;
console.log(`The word NOT is at the position ${wordNot}, The word BAD is at the position ${wordBad}`)

if (wordNot < wordBad &&  wordNot != -1 && wordBad != -1){
	sentence_array.splice(wordNot, wordBad - wordNot + 1, "good")
	let new_sentence = sentence_array.join(" ")
	console.log(new_sentence)
}




