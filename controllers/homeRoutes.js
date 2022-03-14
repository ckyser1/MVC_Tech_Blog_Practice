const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in,
  });
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/userProfile', async (req, res) => {
  try {
      const uData = await User.findByPk(req.session.user_id, {
        include: [
          {
            model: Post
          },
        ],
      });
     const userProfile = uData.get({plain:true});
     console.log(req.session.logged_in)
  
      res.render('userProfile', {
             user: userProfile,
             logged_in: req.session.logged_in,
           });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });






router.get(`/signup`, (req, res) => {
  res.render(`signupform`);
});

router.get(`/newPost`, (req, res) => {
  res.render(`newPosting`);
});

module.exports = router;
