const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { userService } = require('../services');

const createUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.createUser({ email, password });

  return res.status(mapStatusHTTP('OK')).json({ data: user });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();

  return res.status(mapStatusHTTP('OK')).json({ data: users });
};

module.exports = {
  createUser,
  getUsers,
};
