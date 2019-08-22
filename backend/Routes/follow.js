'use strict'

const express = require('express');
const api = express.Router();
const followController = require('../controllers/follow');
const tokenAutentication = require('../middelwares/autenticarToken');
const token = tokenAutentication.ensureAuth;

api.post('/followTo/:followed',token,followController.follow);
api.delete('/delete-follow/:id',token,followController.deleteFollow);

module.exports = api;

