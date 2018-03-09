'use strict';
module.exports = (sequelize, DataTypes) => {
  var Usuario = sequelize.define('Usuario', {
    id_usuario: DataTypes.INTEGER,
    usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.ENUM
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};