const sequelize = require('../config/connection');
const {User, Post, Comment, Family_group} = require('../models');

const renderUserData = require('./userSeedData.json')
const renderPostData = require('./userPostData.json')