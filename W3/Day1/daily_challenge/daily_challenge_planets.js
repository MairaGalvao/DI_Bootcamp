function startingSolarSystem(){

let planetsSolarSystem = ["Mercury", "Venus", "Earth", "Mars",
"Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

let gettingSection = document.getElementsByClassName("listPlanets");

    for (let i = 0; i <= planetsSolarSystem.length; i++){
        let createDiv = document.createElement("div");
        let divText = document.createTextNode(planetsSolarSystem[i]);
        createDiv.classList.add("planet")
        createDiv.classList.add(planetsSolarSystem[i])
        createDiv.appendChild(divText);
        gettingSection[0].appendChild(createDiv);
    }
}
startingSolarSystem()
