const exp = require('express'); //create a server
const fs = require('fs') //the fs I need it in order to do everything in the file system
const bp = require('body-parser'); //to parse 

const app = exp();

// app.use(bp.urlencoded({extended:false}));
// app.use(bp.json());

app.use('/',exp.static(__dirname +'/public'));

app.post('/addUser',(req,res)=>{
    console.log(req.body);
    res.send({message:'ok'})
  })


// app.listen(5000);
app.set('port', 5000);
app.listen(app.get('port'), ()=>{
  console.log(`App started at port ${app.get('port')}`);
})
