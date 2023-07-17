const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

const getUsers = async () => {
 const users = await User.findAll({
  attributes: { exclude: ['password'] },
});

 return users;
};

const getUserByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
};
