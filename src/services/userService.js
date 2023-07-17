const { User } = require('../models');

const createUser = async ({ displayName, email, password, _image }) => {
  const newUser = await User.create({ displayName, email, password, _image });

  return newUser;
};

const getUsers = async () => {
 const users = await User.findAll();

 return users;
};

const getUserByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
};
