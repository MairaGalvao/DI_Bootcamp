var exp = require('express');
let bp = require('body-parser')
var app = exp();


app.use('/',exp.static(__dirname +'/Public'));

app.set('port', 5000);
app.listen(app.get('port'), ()=>{
  console.log(`App started at port ${app.get('port')}`);
})

