const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");


passport.use(
    new GoogleStrategy({
        clientID: process.env['GOOGLE_CLIENT_ID'],
        clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
        callbackURL: 'https://www.example.com/oauth2/redirect/google',
        },
      (accessToken,refreshToken,profile,done)=>{

      }
));
