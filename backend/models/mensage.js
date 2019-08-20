'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let Mensage = new Schema({
    emmiter :  { type : Schema.ObjectId , ref : 'User'},
    receiver :  { type : Schema.ObjectId , ref : 'User'},
    text :String,
    created_at :String
});

module.exports = mongoose.model('Mensaje', Mensage);