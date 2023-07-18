const express = require('express');

const routes = express.Router();

const { postController } = require('../controllers');
const validateJwtToken = require('../middlewares/validateJwtToken');

routes.get('/', validateJwtToken, postController.getCategories);

routes.post('/', validateJwtToken, postController.createCategory);

module.exports = routes;