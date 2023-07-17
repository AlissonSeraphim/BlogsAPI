const express = require('express');

const routes = express.Router();

const { categoriesController } = require('../controllers');
const validateJwtToken = require('../middlewares/validateJwtToken');

routes.post('/', validateJwtToken, categoriesController.createCategory);

module.exports = routes;