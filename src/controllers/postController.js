const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { postService } = require('../services');

const createCategory = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const posts = await postService.createUser({ title, content, categoryIds });

  return res.status(mapStatusHTTP('CREATED')).json(posts);
};

const getCategories = async (_req, res) => {
  const posts = await postService.getCategories();

  return res.status(mapStatusHTTP('OK')).json(posts);
};

module.exports = {
  createCategory,
  getCategories,
};