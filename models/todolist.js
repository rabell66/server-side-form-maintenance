'use strict';
module.exports = function(sequelize, DataTypes) {
  var todolist = sequelize.define('todolist', {
    title: DataTypes.STRING,
    completed: {
      type:DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todolist;
};