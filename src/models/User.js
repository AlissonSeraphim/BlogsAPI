/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user'
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  },
  );
  // User.associate = (models) => {
  //   User.hasMany(models.blogPosts, {
  //     foreignKey: 'user_id',
  //     as: 'users',
  //   });
  // };

  return User;
};
