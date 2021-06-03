setTimeout(showBanner, 5000)
let section = document.querySelector('section')


function showBanner(){
    let div = document.createElement("div")
    div.classList.add("banner")
    let text = document.createTextNode("sales ends in 10 minutes")
    div.appendChild(text)
    section.appendChild(div)
      
}



