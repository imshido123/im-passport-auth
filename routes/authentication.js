/*Dependencies*/
const express = require('express');
const passport = require('passport')
const router = express.Router();
const { authenticationService } = require('../services/index');
const { twitterConsumerKey, twitterConsumerSecret } = require('../config/index');

/*Instantiating services to use*/
const TwitterStrategy = require('passport-twitter').Strategy;
const authServiceHandler = new authenticationService();

passport.use(new TwitterStrategy({
    consumerKey: twitterConsumerKey,
    consumerSecret: twitterConsumerSecret,
    callbackURL: "/auth/twitter/callback"
}, (token, tokenSecret, profile, done) => {
    User.findOrCreate({ twitterId: profile.id }, (err, user) => {
        if (err) { return done(err); }
        done(null, user);
    });
}));


/*Routes definition*/
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', 
        passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' })
);

module.exports = router;