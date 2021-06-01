module.exports = {
    // make sure that user is logged in
      ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
          return next()
        } else {
          res.redirect('/profile')
        }
      },
      ensureGuest: function (req, res, next) {
        if (!req.isAuthenticated()) {
          return next()
        } else {
          res.redirect('/login')
        }
      },
    }