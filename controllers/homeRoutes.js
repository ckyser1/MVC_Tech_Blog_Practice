const router = require('express').Router();
const { User, Post } = require('../models');


router.get('/', async (req, res) => {
  try {
    const pmData = await Post.findByPk(req.session.user_id, {
      include: [
        {
          model: User
        },
      ],
    });
    const mainPost = pmData.get({ plain: true });
    console.log(mainPost);
    res.render('homepage', {
      mainPost,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
      order: [['createdAt', 'DESC']]
    });
    const userProfile = uData.get({ plain: true });
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

router.get('/search/:last_name', async (req, res) => {
  try {
    const searchResult = await User.findAll({ where: { last_name: req.params.last_name } })
    const searchResultData = searchResult.map((res) => res.get({ plain: true }))
    console.log(searchResult)
    res.render('searchresults', { searchResult: searchResultData })
  } catch (err) {
    res.status(400).json(err);
  }
})

router.get('/searchresults', (req, res) => {
  res.render('searchresults');
})

router.get('/signup', (req, res) => {
  res.render('signupform');

});

router.get('/newPosting', (req, res) => {
  res.render('newPosting');
})


router.get('/postings', async (req, res) => {
  try {
    const pData = await Post.findAll({
      include: [
        {
          model: User
        },
      ],
      limit: 10,
      order: [['updatedAt', 'DESC']],
    });
    const userPosts = pData.map((pDataObject) =>
      pDataObject.get({ plain: true })
    );
    console.log(userPosts);
    res.render('postings', {
      userPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/signup', (req, res) => {
  res.render(`signupform`);
});

router.get(`/newPost`, (req, res) => {
  res.render(`newPosting`);
});

module.exports = router;