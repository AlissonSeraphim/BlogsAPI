const express = require('express');

const routes = express.Router();

const { postController } = require('../controllers');
const validateJwtToken = require('../middlewares/validateJwtToken');

routes.get('/', validateJwtToken, postController.getPost);

routes.post('/', validateJwtToken, postController.createPost);

module.exports = routes;