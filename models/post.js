const database = require('mime-db');
const { Module } = require('module');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: true

        },
        post_bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        post_seeking: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true

        }
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    });

module.exports = Post;