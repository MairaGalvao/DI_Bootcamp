// // 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();
// // 2. Configure it: GET-request for the URL /article/.../load
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// // 3. Send the request over the network
// xhr.send();
// xhr.onload = function() {
//   if (xhr.status != 200) {
//       console.log('error')
//     // analyze HTTP status of the response
//     // e.g. 404: Not Found
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else { // show the result
//     // response is the server response
//     // console.log(`Done, got ${xhr.response.length} bytes`);
//     console.log(xhr.response);
//   }
// };

// xhr.onprogress = function(event) {
//     if (event.lengthComputable) {
//       console.log(`Received ${event.loaded} of ${event.total} bytes`);
//     } else {
//       console.log(`Received ${event.loaded} bytes`); // no Content-Length
//     }
//   };
//   xhr.onerror = function() {
//     console.log("Request failed");
//   };

//creating elements
let navBar = document.createElement('DIV') 
let navBarName = navBar.classList.add("navBar");
let gridDiv = document.createElement('DIV') 
let robotDivs = gridDiv.classList.add("containerRobots");
let input = document.createElement('INPUT')
let title = document.createElement('H1')
let textTitle = document.createTextNode('ROBO FRIENDS')
let getroot = document.getElementById('root')
getroot.appendChild(navBar)
getroot.appendChild(gridDiv)
navBar.appendChild(title)
title.appendChild(textTitle)
navBar.appendChild(input)

let robots = []

let xhl = new XMLHttpRequest()
xhl.open ('GET','https://jsonplaceholder.typicode.com/users')
xhl.responseType = 'json'
xhl.send()
xhl.onload = function(){
    robots = xhl.response
    console.log(robots)
    createAllCards(xhl.response)
}

xhl.onerror = function(){
    console.log('whatever')
}


const createCard = (item) => {
let card = document.createElement('DIV')   
let cardName = document.createElement('H6')
let imgRobot = document.createElement('IMG')
let pImg = document.createElement('P')
imgRobot.appendChild(pImg)
cardName.innerText = item.name  + '  ' + item.email
imgRobot.classList.add('num' + item.id)
card.classList.add(item.username)
card.appendChild(imgRobot)
imgRobot.setAttribute('src', item.image)
card.appendChild(cardName)
return card;
}

const createAllCards = (arr) => {
gridDiv.innerHTML = '';
arr.forEach(item => {
    let card = createCard(item);
    gridDiv.appendChild(card);
})
}
const searchBox = () => {

let myInput = document.getElementsByTagName('input')[0].value
const filteredRobots = robots.filter((item) => {
  return item.name.toLowerCase().includes(myInput.toLowerCase())
})
createAllCards(filteredRobots)
}



addEventListener('keyup', searchBox)

