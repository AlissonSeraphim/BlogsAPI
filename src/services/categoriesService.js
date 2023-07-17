const { Category } = require('../models');

const createUser = async ({ name }) => {
  const newUser = await Category.create({ name });

  return newUser;
};

module.exports = {
  createUser,
};
