function bottlesBeer (){
    let usersNumber = parseFloat(prompt("Type a number to begin counting down the bottles")) 
    let reducer = 1 
    
    
    while (usersNumber >= 1) {
                
        if (reducer <= 1) {
            console.log(`${usersNumber} bottles of beer on the wall`);
            console.log(`${usersNumber} bottles of beer on the wall`);
            console.log(`${usersNumber} bottles of beer`);
            console.log(`Take ${reducer} down, pass it around`);
                
        } 
        else if (reducer > 1) {
            console.log(`${usersNumber} bottles of beer on the wall`);
            console.log(`${usersNumber} bottles of beer on the wall`);
            console.log(`${usersNumber} bottles of beer`);
            console.log(`Take ${reducer} down, pass them around`);
        }    
        usersNumber -= reducer;
        reducer ++;  
    }
}

bottlesBeer()