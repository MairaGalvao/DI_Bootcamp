//Exercise 1 : Giphy API
var myAjax = new XMLHttpRequest();
myAjax.open ('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

myAjax.responseType = 'json'
myAjax.onload = function(){
console.log(myAjax)
myAjax.response
}    

myAjax.send();

function retriveSunGifs (){
    //ask the teacher to do the second part of the exercise 

}