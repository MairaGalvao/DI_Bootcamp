//3 buttons - the previous pokemon botton right, previous pokemon left, green button 
//div1 with an image of the control - DONE
//to do 
//div2 inside of the div 1 for the caracteristcs of the pokemon - DONE
//DIV 3 FOR THE INFO OF THE POKEMON
//5 Ps or Hs for the written part - 
//div3 inside of the div 2 for the pic of the pokemon
//div for the logo in the left - DONE
//div for info-rules
//3 ps or hs for each rule
function creatingDiv_img(){
    let divLogo= document.createElement('IMG')
    document.body.appendChild(divLogo);
    divLogo.id = 'logoImg'
    divLogo.src = "https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%205/Day%205/Mini%20Projects/Mini-Project%202%20-%20Pokedex%20API/logo.png?raw=true"
    let divControl = document.createElement('DIV')
    document.body.appendChild(divControl);
    divControl.id = 'control'
    let divPokemonPic = document.createElement('DIV')
    divControl.appendChild(divPokemonPic)
    divPokemonPic.id = 'pokemonPic'
    let divPokemonInfo = document.createElement('DIV')
    divPokemonInfo.id = 'pokeInfo'
    divControl.appendChild(divPokemonInfo)
    let imgControl = document.createElement('IMG')
    divControl.appendChild(imgControl)
    let randomBtn = document.createElement('BUTTON')
    divControl.appendChild(randomBtn)
    imgControl.id = 'controlImg'
    imgControl.src = "https:github.com/devtlv/studentsGitHub/blob/master/JS/Week%205/Day%205/Mini%20Projects/Mini-Project%202%20-%20Pokedex%20API/pokedex.png?raw=true;"
}
creatingDiv_img()

async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200");
    let data = await response.json() // I am getting an obj with name and url 
    // waits until the request completes...
    return data
}
fetchData().then(data => {
    let pokemonData = data.results
    console.log(pokemonData) //pokemon data is the complete data with name and url

    // i is my index and x pokemondata is the data itself
    
    // randomly pick an index from within the list
    // display the info of the pokimon in that index

    // for now, let's pick ourselves the index:
    let randomIndex = 3;
    let randomPokemon = pokemonData[randomIndex]
    
    fetchPokemonInfo(randomPokemon).then (data2 => 
    {console.log(randomPokemon)
        console.log(data2)
    })
})

async function fetchPokemonInfo(objPokemon) {
    var response = await fetch(objPokemon.url);
    let pokemonDetails = await response.json() 
    // waits until the request completes...
    return pokemonDetails
}

console.log('maira')



async function fetchData2() {
    const response2 = await fetch(response2.url);
    let data = await response2.json() // I am getting an obj with name and url 
    // waits until the request completes...
    return data
}
fetchData2().then(data2 => {
    let pokemonData2 = data2.name
    console.log(pokemonData2)   
})
