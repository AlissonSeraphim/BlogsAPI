const { Op } = require('sequelize');
const { BlogPost, Category, PostCategory } = require('../models');

const validCategories = async (categoryIds) => {
  const categories = categoryIds.map((categoryId) => ({ id: categoryId }));

  const posts = await Category.findAndCountAll({
     where: { [Op.or]: categories } });

  const existingCategories = posts.count === categoryIds.length;

  return existingCategories;
};

const createPost = async ({ title, content, categoryIds }, userId) => {
  const newPost = await BlogPost.create({ 
    userId, 
    title, 
    content,
    updated: new Date(),
    published: new Date(),
   });

  const { id } = newPost.dataValues;
  const postCategoryRecords = categoryIds.map((categoryId) => ({ postId: id, categoryId }));
  await PostCategory.bulkCreate(postCategoryRecords);
  
  return newPost;
};

const getPosts = async (user) => {
  const categories = await Category.findAll();
  const allCategories = categories.map((category) => category.dataValues);

  const posts = await BlogPost.findAll();
  
  const allPosts = posts.map((post) => (
    {
    ...post.dataValues,
    user,
    categories: allCategories,
  }));

  return allPosts;
};

module.exports = {
  createPost,
  getPosts,
  validCategories,
};
