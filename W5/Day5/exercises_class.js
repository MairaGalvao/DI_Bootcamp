let p = new Promise ((res, rej) => {
    setTimeout (() => {
        console.log('good morning') 
    }, 4000)
})
console.log(p)

Promise.resolve(setTimeout(() => {
    console.log('good morning students')
}, 4000))
