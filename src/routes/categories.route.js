const express = require('express');

const routes = express.Router();

const { categoriesController } = require('../controllers');
const validateJwtToken = require('../middlewares/validateJwtToken');

routes.get('/', validateJwtToken, categoriesController.getCategories);

routes.post('/', validateJwtToken, categoriesController.createCategory);

module.exports = routes;