const express = require('express');
const FrontController = require('../controllers/FrontController');
const route = express.Router()

route.get('/', FrontController.home)
route.get('/header', FrontController.about)
route.get('/footer', FrontController.contact)
route.post('/userinsert', FrontController.userinsert)

module.exports = route;