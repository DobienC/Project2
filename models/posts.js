module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    post_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Blog"
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]

      },
      image: {
        type: DataTypes.STRING
      }
    }
  });

  return Post;
};
