require('dotenv').config()

const config = {
    twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
    twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    facebookKey: process.env.FACEBOOK_KEY,
    otherKey: process.env.OTHER_KEY
};

module.exports = config;