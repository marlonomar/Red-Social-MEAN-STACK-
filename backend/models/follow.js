'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let Follow = new Schema ({
    user: { type : Schema.ObjectId , ref : 'User'},
    followed:{ type : Schema.ObjectId , ref : 'User'}
});

module.exports =  mongoose.model('Follow',Follow);