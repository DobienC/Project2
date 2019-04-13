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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwil2YTxxczhAhVYGjQIHS_lDSsQjRx6BAgBEAU&url=http%3A%2F%2Fwww.hoypoloigallery.com%2Fkoi-fish.html&psig=AOvVaw3yDc5if_aE26k-Eu5UfJ6O&ust=1555226877740281",
        validate: {
          isUrl: true
        }
      }
    }
  });

  return Post;
};
