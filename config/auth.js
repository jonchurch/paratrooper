// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : process.env.CLIENT_ID, 
        'clientSecret'    : process.env.APP_SECRET,
        'callbackURL'     : process.env.PUBLIC_URL + '/auth/facebook/callback',
        'profileFields': ['first_name', 'last_name', 'email', 'accounts']

    }

};
