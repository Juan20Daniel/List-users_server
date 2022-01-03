const express = require('express');
const route = express.Router();
const lookUser = require('../controllers/lookUser'); 

route.get('/users/:type', lookUser.lookUser);

module.exports = route;