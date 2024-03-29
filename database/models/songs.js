'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  songs.init({
    songTitle: DataTypes.STRING,
    artist: DataTypes.STRING,
    album: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'songs',
  });
  return songs;
};