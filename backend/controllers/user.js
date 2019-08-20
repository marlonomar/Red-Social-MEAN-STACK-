'use strict'

const User = require('../models/user');
const bcrypt = require('bcrypt');

function getAllUsers (req,res){
    User.find().exec((err,user)=>{
        if(err){
            return res.status(400).json({
                success: false,
                err
            })
        }else{
            res.json({
                success:true,
                user
            })
        }
    })
}

function getActiveUsers (req,res){

    User.find({ative:true}).exec((err,user)=>{
        if(err){
            return res.status(400).json({
                success: false,
                err
            })
        }else{
            res.json({
                success:true,
                user
            })
        }
    })
}

function getDeleteUsers (req,res){

    User.find({ative:false}).exec((err,user)=>{
        if(err){
            return res.status(400).json({
                success: false,
                err
            })
        }else{
            res.json({
                success:true,
                user
            })
        }
    })
}

function createUser (req,res){

    let body = req.body;

    let user = new User({
        name : body.name,
        surname : body.surname,
        nickname : body.nickname,
        email : body.email,
        password : bcrypt.hashSync(body.password,10),
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
    let id = req.params.id;
    let body = req.body;
    
    User.findByIdAndUpdate(id,body,{new:true},(err,usuario)=>{
        if(err){
            return res.status(400).json({
                success: false,
                err
            })
        }
        res.json({
            success:true,
            user: usuario
        })
    })
}

function DeleteUser (req,res){
    let id = req.params.id;
    let active= {
        active:false
    }
    User.findByIdAndUpdate(id,active,{new : true},(err,remove)=>{

        if(err){
            return res.status(400).json({
                success: false,
                err
            })
        }
    
        if(!remove){
            return res.status(400).json({
                success: false,
                err : {
                    mensaje : 'registro no encontrado'
                }
            })
        }
    
        res.json({
            delete: true,
            registro: remove
        })
    
       })
}

function reactiveUser(req,res){
    let id = req.params.id;
    let active= {
        active:true
    }
    User.findByIdAndUpdate(id,active,{new : true},(err,reactive)=>{

        if(err){
            return res.status(400).json({
                success: true,
                err
            })
        }
    
        if(!reactive){
            return res.status(400).json({
                success: false,
                err : {
                    mensaje : 'registro no encontrado'
                }
            })
        }
    
        res.json({
            active: true,
            registro: reactive
        })
    
       })
}

function getUser(req,res){
    let id = req.params.id;
    User.find({_id : id}).exec((err,user)=>{
        if(err){
            return res.status(400).json({
                success: false,
                err
            })
        }
        res.json({
            success:true,
            user:user
        })
    });
}

function loginUser(req,res){
    let params = req.body;
    let email = params.email;
    let password = params.password;

    User.findOne({email:email},(err,user)=>{

        if(err) return res.status(500).res.json({success:false,mensaje:'error en la peticion'});

        if(user){
            bcrypt.compare(password, user.password, (err,check)=>{

                if(check){
                    user.password = undefined;
                   if(user.active == true){
                        return res.status(200).json({
                            success:true,
                            mensaje: 'Usuario Identificado',
                            user : user
                    })
                   }else{
                       return res.status(404).send({success:false,mensaje:'Usuario inactivo'})
                   }
                }
                else{
                    return res.status(404).send({success:false,mensaje:'clave invalida'});
                }
            })
        }
        else{
            return res.status(404).send({success:false,mensaje:'usuario invalido'});
        }
    })
}

module.exports ={
    getAllUsers,
    createUser,
    UploadUser,
    DeleteUser,
    getActiveUsers,
    getUser,
    getDeleteUsers,
    loginUser,
    reactiveUser
}

