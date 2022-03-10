const User = require('./user');
const Comment = require('./comment');
const Family_group = require('./family_group');
const Post = require('./post');



User.hasOne(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.belongsTo(Family_group, {
    foreignKey: 'family_members',
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id', 
    onDelete: 'CASCADE'
});


module.exports = {User, Post, Comment, Family_group}



