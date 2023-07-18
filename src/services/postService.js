const { BlogPost } = require('../models');

const createPost = async ({ title, content, categoryIds }) => {
  const newPost = await BlogPost.create({ title, content, categoryIds });

  return newPost;
};

const getCategories = async () => {
  const Posts = await BlogPost.findAll();

  return Posts;
};

module.exports = {
  createPost,
  getCategories,
};
