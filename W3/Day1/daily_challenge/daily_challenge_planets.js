function startingSolarSystem(){

let planetsSolarSystem = ["Mercury", "Venus", "Earth", "Mars",
"Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

let gettingSection = document.getElementsByClassName("listPlanets");

    for (let i = 0; i < planetsSolarSystem.length; i++){
        let createDiv = document.createElement("div");
        let divText = document.createTextNode(planetsSolarSystem[i]);
        createDiv.classList.add("planet")
        createDiv.classList.add(planetsSolarSystem[i])
        createDiv.appendChild(divText);
        gettingSection[0].appendChild(createDiv);
        
    }
}


// function startingMoonSystem(){
//     let moon = [{"name": "Mercury", "moons": 1}, 
//     {"name": "Venus", "moons": 2},
//      {"name": "Earth", "moons": 3},
//      {"name": "Venus", "moons": 4},
//      {"name": "Earth", "moons": 5},
//      {"name": "Venus", "moons": 6},
//      {"name": "Earth", "moons": 7},
//      {"name": "Venus", "moons": 8},
//      {"name": "Earth", "moons": 9}] 
//     let gettingSectionforMoon = document.getElementsByClassName("listPlanets");
  
    
//     for (let i = 0; i < moon.length; i++){
//         let starObj = moon[i];
//         let starName = starObj.name;
//         let numberOfMoons = starObj.moons;
//         let divClassName = "planet " + starName;
        
//         // wrap each star with another div (so the moons will be together with it)
//         let starDiv = document.getElementsByClassName(divClassName)
//         let starDivWrap = document.createElement("div");
//         starDivWrap.appendChild(starDiv[0])
        
//         console.log(gettingSectionforMoon[0])

//         // creat moons!
//         let createMoon = document.createElement("div");
//         let moonText = document.createTextNode(numberOfMoons);
//         // createMoon.classList.add("planet")
//         // createMoon.classList.add(moon[i])
//         createMoon.appendChild(moonText);
//         console.log(createMoon)
//         gettingSectionforMoon[0].appendChild(createMoon);
//     }
//     // let gettingSection = document.getElementsByClassName("listPlanets");
//     console.log(gettingSection[0])
// }

startingSolarSystem()
// startingMoonSystem()