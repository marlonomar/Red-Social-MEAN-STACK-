'use strict'

const User = require('../models/user');
const bcrypt = require('bcrypt');

function getAllUsers (req,res){
    res.status(200)
       .json({
           success: true,
           mensaje : 'GET USERS TRUE'
       })
}

function createUser (req,res){

    let body = req.body;

    let user = new User({
        name : body.name,
        surname : body.surname,
        nickname : body.nickname,
        email : body.email,
        password : body.password,
        role: body.role,
        image : body.image
    });

    user.save((err,user)=>{

       if(err){
           res.status(500).json({
               success:false,
               err
           })
       }
       
       else{
            res.status(200).json({
                success : true,
                user :user
            })
       }
       
    })
    
}

function UploadUser (req,res){
    res.status(200)
       .json({
           success : true,
           mensaje : 'PUT USER TRUE'
       })
}

function DeleteUser (req,res){
    res.status(200)
       .json({
           success : true,
           mensaje : 'DELETE USER TRUE'
       })
}

module.exports ={
    getAllUsers,
    createUser,
    UploadUser,
    DeleteUser
}

