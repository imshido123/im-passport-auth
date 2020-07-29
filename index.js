/*Dependencies*/
const express = require('express');
const passport = require('passport')
const { auth } = require('./routes/index');

/*Initializing services*/
const app = express();
const PORT = 8000;

/*Middlewares*/
// app.use(express.json()); // Enabling JSON in routes operations
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.models.user.findOne({
            where: {
                linkedinId: id
            }
        });
        done(null, user);
    } catch (err) {
        done(err);
    }
});

/*End Points*/
app.use('/auth/', auth);

/*Instantiating the server*/
const server = app.listen(PORT, () => {
    console.log(`Listening http://localhost:${server.address().port}`);
});