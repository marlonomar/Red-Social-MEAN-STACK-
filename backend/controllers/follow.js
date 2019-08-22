'use strict'

const mongoosePagination = require('mongoose-pagination');

const User = require('../models/user');
const Follow = require('../models/follow');

function follow (req,res){

    let follow = new Follow({
        user : req.user.sub,
        followed : req.params.followed
    });

    follow.save((err,followStorage)=>{
        if(err) return res.status(500).send({mensaje:'erro al hacer el seguimiento'});

        if(!followStorage) return res.status(404).send({mensaje :'no se pudo seguir a ese usuario'});

        return res.status(200).send({
            follow: followStorage
        });
    })
}

function deleteFollow(req,res){

    let userId = req.user.sub;
    let followId = req.params.id;

    Follow.find({'user': userId , 'followed' : followId}).remove(err=>{

        if(err) return res.status(500).send({mensaje:'error al borrar el follow'});

        return res.status(200).send({
            mensaje: 'se ha borrado el follow!!!'
        });
    }
            
)

}

module.exports ={
    follow,
    deleteFollow
}