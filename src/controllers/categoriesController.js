const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { categoriesService } = require('../services');
// const { createToken } = require('../auth/authFunctions');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ 
      message: '"name" is required',
    }); 
}

  const category = await categoriesService.createUser({ name });

  // const token = createToken(category);

  return res.status(mapStatusHTTP('CREATED')).json(category);
};

const getCategories = async (_req, res) => {
  const categories = await categoriesService.getCategories();

  return res.status(mapStatusHTTP('OK')).json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};