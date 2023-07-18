const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { postService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { data: { id } } = req.payload;

  if (!title || !content || !categoryIds) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: 'Some required fields are missing',
    });
  }

  const validCategories = await postService.validCategories(categoryIds);
  console.log('validCategories', validCategories);
  if (!validCategories) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: 'one or more "categoryIds" not found',
    });
  }

  const post = await postService.createPost({ title, content, categoryIds }, id);

  return res.status(mapStatusHTTP('CREATED')).json(post.dataValues);
};

const getPost = async (_req, res) => {
  const posts = await postService.getPosts();

  return res.status(mapStatusHTTP('OK')).json(posts.dataValues);
};

module.exports = {
  createPost,
  getPost,
};