function creatingSection(){
    let fetchBody = document.getElementsByTagName('body')[0]
    let newSection = document.createElement('section')
    newSection.setAttribute("id", "template")
    fetchBody.appendChild(newSection)
}
creatingSection()


function creatingDivLeft(){
    let fetchSection = document.getElementsByTagName('section')[0]
    let newDivLeft = document.createElement('div') 
    newDivLeft.setAttribute("id","colorBox") 
    fetchSection.appendChild(newDivLeft)
}
    //is it a problem that my section is below script

creatingDivLeft()


function creatingDivRight(){
    let fetchSection = document.getElementsByTagName('section')[0]
    let newDivRight = document.createElement('div')
    newDivRight.setAttribute("id","grayBox") 
    fetchSection.appendChild(newDivRight)
}
creatingDivRight()

function creatingGrid(){
    //do a loop to create all the grid 
    //add to each cell a add.listner for the click and let go the color chosen
    for (let i = 0; i < 6; i++) {
        x = 30;
    }
}

creatingGrid()
