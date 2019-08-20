'use strict'

const express = require('express');
const userController = require('../controllers/user');
const api = express.Router();

api.get('/show-all-users',userController.getAllUsers);
api.post('/create-user',userController.createUser);
api.put('/upload-user',userController.UploadUser);
api.delete('/delete-user',userController.DeleteUser);

module.exports = api;