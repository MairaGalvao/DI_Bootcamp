// const {readFileSync, readFile} = require('fs');

//Exercise 1 
// const text = readFileSync('./ex_text', 'utf8') // sync. blocked! this line of code will not move on until we finish reading the entire file

// console.log(text)


// readFile('./ex_text', 'utf8', (err, txt) => { // async. non blocking! 
//     console.log(txt)
//     console.log('finished reading the file!')

// })

// console.log('testing the async readFile method')

// Exercise 2

// fs = {
//     writeFile: // function that you can call
//     readFile: // function
//     readFileSync: 
// }

// const fs = require('fs')
// fs.writeFile //the same thing as below, but below is descontruicting the property from the objects

// const {writeFile} = require('fs')
// writeFile('newText.txt', 'I am creating a new file with some text inside', function(err){
//     console.log('hey, I finished creating my new file with the text given')
// })


//Exercise 3 

const { writeFile, appendFile } = require('fs')

writeFile('shopList.txt', 'Buy Milk', function (err) {
    console.log('hey, I finished creating my SECOND new file with the text given')

    appendFile('shopList.txt', '\n Buy chocolates', function (err) {
        console.log('hey, I finished appending the new item on the shopping list')
        appendFile('shopList.txt', '\n buy wine', (error) => {
            console.log('super done')
        })
    })

})



