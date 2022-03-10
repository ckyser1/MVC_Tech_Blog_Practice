const loginCheck = (req, res, next) => {
    // if the user is not currently authenticated as logged in restrict them from the access of the content they are looking for and send the back to the login screen.
    !req.session.logged_in ? res.redirect('/login') : next();
};

module.exports = loginCheck;