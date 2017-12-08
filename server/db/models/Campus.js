const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.pinimg.com/736x/96/e1/62/96e16261da625fc18a478e79d39bc4c3--cornell-university-university-college.jpg'
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus;
