const express = require('express');

const routes = express.Router();

const { userController } = require('../controllers');
const { validateUserEntries } = require('../middlewares/validUserEntries');

routes.get('/', userController.getUsers);

routes.post('/', validateUserEntries, userController.createUser);

module.exports = routes;
