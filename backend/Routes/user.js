'use strict'

const express = require('express');
const userController = require('../controllers/user');
const api = express.Router();

api.get('/show-users',userController.getActiveUsers);
api.get('/user/:id',userController.getUser);
api.get('/deleted-users',userController.getDeleteUsers);
api.get('/show-all-users',userController.getAllUsers);
api.post('/create-user',userController.createUser);
api.post('/login',userController.loginUser);
api.put('/upload-user/:id',userController.UploadUser);
api.put('/reactive-user/:id',userController.reactiveUser);
api.delete('/delete-user/:id',userController.DeleteUser);

module.exports = api;