// const express = require('express')
// const app = express()

// //with the code below the server is talking to front end browser
// app.get('/', (req, res) => {
//   res.send('home page')
// })

// //-----------------------------------------------------------//
// //with the code below you are doing the same for the direc /users
// app.get('/users', (req, res) => {
//   res.send('users page')
  
// })

// app.listen(4000)



const exp = require('express'); 
const fs = require('fs')  //part3
const cors = require('cors')

const app = exp(); 

app.use(cors());

app.use('/',exp.static(__dirname+'/Public'))

app.get('/addItems', (req,res)=>{
    console.log(req.query);// part 2
    let itemArr = [];

    const file = fs.readFileSync('./items');
    let fileStr = file.toString();
    console.log(fileStr);
    itemArr = JSON.parse(fileStr);

    console.log(itemArr);

    itemArr.push(req.query);
// part 4
    fs.writeFile('./items', JSON.stringify(itemArr), err=>{
      if(err){
        console.log(err);
      }
     }) 
    res.send({itemArr});
    // res.send({message:'ok'});

})




app.listen(4550);
