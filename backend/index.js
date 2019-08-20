'use strict'

//SERVER
require('./app');

//MONGOOSE

const mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/gochat-dataBase', { useNewUrlParser: true })
        .then(()=>{
            console.log('base de datos online');
        })
        .catch((err)=>{
            console.log(err);
        });
