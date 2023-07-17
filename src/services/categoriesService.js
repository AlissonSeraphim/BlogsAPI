const { Category } = require('../models');

const createUser = async ({ name }) => {
  const newUser = await Category.create({ name });

  return newUser;
};

const getCategories = async () => {
  const users = await Category.findAll();

  return users;
};

module.exports = {
  createUser,
  getCategories,
};
