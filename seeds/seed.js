const sequelize = require('../config/connection');
const {User, Post, Comment, Family_group} = require('../models');

const userData = require('./userSeedData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();
  
