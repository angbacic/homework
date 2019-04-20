const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users', {
  id:{
    primaryKey: true,
    type:Sequelize.INTEGER,
    allowNull:false,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password_confirmation: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'users'
})

module.exports = User