const express = require('express');

const routes = express.Router();

const { userController } = require('../controllers');
const { validateUserEntries } = require('../middlewares/validUserEntries');
const validateJwtToken = require('../middlewares/validateJwtToken');

routes.get('/', validateJwtToken, userController.getUsers);

routes.get('/:id', validateJwtToken, userController.getUserById);

routes.post('/', validateUserEntries, userController.createUser);

module.exports = routes;
