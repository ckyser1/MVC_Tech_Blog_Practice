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
    foreignKey: 'family_group_id'
});

Family_group.hasMany(User, {
    foreignKey: 'family_group_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id', 
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

module.exports = {User, Post, Comment, Family_group}



