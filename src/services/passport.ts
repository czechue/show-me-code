import passport from 'passport';
import { User } from '../models/User';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
    User.findById(id).then((user: any) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (
            accessToken: any,
            refreshToken: any,
            profile: any,
            done: any
        ) => {
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                // if user exist in DB
                return done(null, existingUser);
            }
            const user = await new User({
                googleId: profile.id,
                name: profile.name.givenName
            }).save();
            done(null, user);
        }
    )
);
