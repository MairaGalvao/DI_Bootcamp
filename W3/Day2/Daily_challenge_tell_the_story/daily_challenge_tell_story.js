let getElementLi = document.getElementsByTagName('li') 

let getElementButton = document.getElementById("lib-button")
getElementButton.addEventListener("click", ()=>{
    let storyArray = getInputs()
    let story = `${storyArray[2]}'s ${storyArray[1]} ${storyArray[0]} likes ${storyArray[3]} in ${storyArray[4]}`
    let getElementP = document.getElementById('story')
    newContent = document.createTextNode(story)
    getElementP.appendChild(newContent)
}
)

let randomButton = document.getElementById("lib-random")
randomButton.addEventListener("click", ()=>{
    let storyArray = getInputs()
    let story1 = `It's the worst thing when a ${storyArray[1]} ${storyArray[0]} is ${storyArray[3]} in the middle of ${storyArray[4]} in front of ${storyArray[2]}`
    let story2 = `When ${storyArray[2]} is ${storyArray[3]} in ${storyArray[4]}, it is so ${storyArray[1]} that the ${storyArray[0]} explodes`
    let story3 = `No one can resist a nice ${storyArray[1]} ${storyArray[0]} specially when you are ${storyArray[3]} in ${storyArray[4]}, right ${storyArray[2]}?`
    let storyCatalog = [story1, story2, story3]
    const randomIndex = Math.floor(Math.random() * storyCatalog.length);
    let chosenStory = storyCatalog[randomIndex]
    let getElementP = document.getElementById('story')
    getElementP.childNodes[0].nodeValue = chosenStory
}
)

function getInputs() {
    let storyArray = []
    for (let index = 0; index < getElementLi.length; index ++){
        let item = getElementLi[index]         
        let currentInputValue = item.childNodes[1].value
        if (currentInputValue == null || currentInputValue == '' ) {
            alert("Please, make sure you fill all the blanks")
            break;
        }
        storyArray.push(currentInputValue) 
    }
    return storyArray
}



