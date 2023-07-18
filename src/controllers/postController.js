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
  console.log('createPost Return', post.dataValues);

  return res.status(mapStatusHTTP('CREATED')).json(post.dataValues);
};

const getPost = async (req, res) => {
  const { data } = req.payload;
  const posts = await postService.getPosts(data);

  return res.status(mapStatusHTTP('OK')).json(posts);
};

module.exports = {
  createPost,
  getPost,
};