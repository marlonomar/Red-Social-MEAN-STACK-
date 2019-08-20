'use strict'

/** 
 * SERVIDOR
*/
'use strict'
//EXPRESS
const express = require('express');
const app = express();

//BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//SETTINGS
app.set('json spaces 2',2)
app.use(express.json());

//MODELOS
const User = require('./models/user');

//PETICIONES
app.get('/',(req,res)=>{
    
  
})

app.listen(3000,()=>{
    console.log('servidor funcionando en http://localhost:3000');
});



module.exports = {app};

