const router = require('express').Router();
const session = require('express-session');
const { Post } = require('../../models');


router.post('/newPosting', async (req,res) => {
    try {
      const newPost = await Post.create({
  
        post_title: req.body.post_title,
        post_bio: req.body.post_bio,
        user_id: req.session.user_id,
        author: req.session.user_id
        
      })
      res.status(200).json(newPost)
  
    } catch (err){
      res.status(400).json(err);
    }
})

module.exports = router