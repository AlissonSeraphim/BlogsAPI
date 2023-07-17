const { User } = require('../models');

const createUser = async ({ email, password }) => {
  const newUser = await User.create({ email, password });

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
