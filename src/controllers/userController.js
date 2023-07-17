const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { userService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const createUser = async (req, res) => {
  const { displayName, email, password, _image } = req.body;

  const existingEmail = await userService.getUserByEmail(email);

  if (existingEmail) {
    return res.status(mapStatusHTTP('CONFLICT')).json({ 
        message: 'User already registered', 
    }); 
  }

  const user = await userService.createUser({ displayName, email, password, _image });

  const { password: _password, ...userWithoutPassword } = user.dataValues;

  const payload = { data: userWithoutPassword };

  const token = createToken(payload);

  return res.status(mapStatusHTTP('CREATED')).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();

  return res.status(mapStatusHTTP('OK')).json({ users });
};

module.exports = {
  createUser,
  getUsers,
};
