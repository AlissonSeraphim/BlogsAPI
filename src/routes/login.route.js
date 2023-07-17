const express = require('express');

const routes = express.Router();

const { loginController } = require('../controllers');
const { validateLoginBody } = require('../middlewares/validLoginCredentials');

routes.post('/', validateLoginBody, loginController.getUserByUsername);

module.exports = routes;
