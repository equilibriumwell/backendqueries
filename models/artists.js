'use strict';
module.exports = (sequelize, DataTypes) => {
  const artists = sequelize.define(
    //the following artist is a table in this DB
    'artists',
    {
      ArtistId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: DataTypes.STRING,
      // tells the models that the new collumn exists
      DateFormed: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return artists;
};