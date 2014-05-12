var _                   = require('underscore'),
    passport            = require('passport'),
    LocalStrategy       = require('passport-local').Strategy,
    FacebookStrategy    = require('passport-facebook').Strategy,
    TwitterStrategy     = require('passport-twitter').Strategy,
    GitHubStrategy      = require('passport-github').Strategy,
    GoogleStrategy      = require('passport-google-oauth').OAuth2Strategy,
    config              = require('../../config'),
    User                = require('../models/User');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({usernameField: 'email'}, function(email, password, done) {
    User.findOne({email: email}, function(err, user) {
        if (!user) {
            return done(null, false, {message: 'Email ' + email + ' not found'});
        }
        
        user.comparePassword(password, function(err, isMatch) {
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, {message: 'Invalid email or password.'});
            }
        });
    });
}));

if (config.settings.auth.facebook) {
    if (!process.env.FACEBOOK_CLIENT_ID && !config.secrets.auth.facebook.clientId) {
        throw new Error('Missing Facebook Client ID');
    }

    if (!process.env.FACEBOOK_CLIENT_SECRET && !config.secrets.auth.facebook.clientSecret) {
        throw new Error('Missing Facebook Client Secret');
    }

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID || config.secrets.auth.facebook.clientId,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || config.secrets.auth.facebook.clientSecret,
        callbackURL: '/auth/facebook/callback',
        passReqToCallback: true
    }, function(req, accessToken, refreshToken, profile, done) {
        if (req.user) {
            User.findById(req.user.id, function(err, user) {
                user.facebook = profile.id;
                
                user.tokens.push({
                    kind: 'facebook',
                    accessToken: accessToken
                });

                user.profile.name = user.profile.name || profile.displayName;
                user.profile.gender = user.profile.gender || profile._json.gender;
                user.profile.picture = user.profile.picture || profile._json.profile_image_url;

                user.active = true;
                
                user.save(function(err) {
                    done(err, user);
                });
            });
        } else {
            User.findOne({facebook: profile.id}, function(err, existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }

                User.findOne({email: profile._json.email}, function(err, user) {
                    if (!user) {
                        user = new User();
                    }

                    user.email = profile._json.email;
                    user.facebook = profile.id;
                    
                    user.tokens.push({
                        kind: 'facebook',
                        accessToken: accessToken
                    });
                    
                    user.profile.name = profile.displayName;
                    user.profile.gender = profile._json.gender;
                    user.profile.picture = profile._json.profile_image_url;

                    user.active = true;
                    
                    user.save(function(err) {
                        done(err, user);
                    });
                });
            });
        }
    }));
}

if (config.settings.auth.google) {
    if (!process.env.GOOGLE_CLIENT_ID && !config.secrets.auth.google.clientId) {
        throw new Error('Missing Google Client ID');
    }

    if (!process.env.GOOGLE_CLIENT_SECRET && !config.secrets.auth.google.clientSecret) {
        throw new Error('Missing Google Client Secret');
    }

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID || config.secrets.auth.google.clientId,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || config.secrets.auth.google.clientSecret,
        callbackURL: '/auth/google/callback',
        passReqToCallback: true
    }, function(req, accessToken, refreshToken, profile, done) {
        if (req.user) {
            User.findById(req.user.id, function(err, user) {
                user.google = profile.id;
                
                user.tokens.push({
                    kind: 'google',
                    accessToken: accessToken
                });
                
                user.profile.name = user.profile.name || profile.displayName;
                user.profile.gender = user.profile.gender || profile._json.gender;
                user.profile.picture = user.profile.picture || profile._json.picture;

                user.active = true;
                
                user.save(function(err) {
                    done(err, user);
                });
            });
        } else {
            User.findOne({google: profile.id}, function(err, existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }

                User.findOne({email: profile._json.email}, function(err, user) {
                    if (!user) {
                        user = new User();
                    }

                    user.email = profile._json.email;
                    user.google = profile.id;
                    
                    user.tokens.push({
                        kind: 'google',
                        accessToken: accessToken
                    });
                    
                    user.profile.name = profile.displayName;
                    user.profile.gender = profile._json.gender;
                    user.profile.picture = profile._json.picture;

                    user.active = true;

                    user.save(function(err) {
                        done(err, user);
                    });
                });
            });
        }
    }));
}

if (config.settings.auth.twitter) {
    if (!process.env.TWITTER_CONSUMER_KEY && !config.secrets.auth.twitter.consumerKey) {
        throw new Error('Missing Twitter Consumer Key');
    }

    if (!process.env.TWITTER_CONSUMER_SECRET && !config.secrets.auth.twitter.consumerSecret) {
        throw new Error('Missing Twitter Consumer Secret');
    }

    passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_CONSUMER_KEY || config.secrets.auth.twitter.consumerKey,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET || config.secrets.auth.twitter.consumerSecret,
        callbackURL: '/auth/twitter/callback',
        passReqToCallback: true
    }, function(req, accessToken, tokenSecret, profile, done) {
        if (req.user) {
            User.findById(req.user.id, function(err, user) {
                user.twitter = profile.id;
                
                user.tokens.push({
                    kind: 'twitter',
                    accessToken: accessToken,
                    tokenSecret: tokenSecret
                });
                
                user.profile.name = user.profile.name || profile.displayName;
                user.profile.location = user.profile.location || profile._json.location;
                user.profile.picture = user.profile.picture || profile._json.profile_image_url;

                user.active = true;
                
                user.save(function(err) {
                    done(err, user);
                });
            });
        } else {
            User.findOne({twitter: profile.id}, function(err, existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }
                
                var user = new User();
                
                user.twitter = profile.id;
                
                user.tokens.push({
                    kind: 'twitter',
                    accessToken: accessToken,
                    tokenSecret: tokenSecret
                });
                
                user.profile.name = profile.displayName;
                user.profile.location = profile._json.location;
                user.profile.picture = profile._json.profile_image_url;

                user.active = true;
                
                user.save(function(err) {
                    done(err, user);
                });
            });
        }
    }));
}

if (config.settings.auth.github) {
    if (!process.env.GITHUB_CLIENT_ID && !config.secrets.auth.github.clientId) {
        throw new Error('Missing Github Client ID');
    }

    if (!process.env.GITHUB_CLIENT_SECRET && !config.secrets.auth.github.clientSecret) {
        throw new Error('Missing Github Client Secret');
    }

    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID || config.secrets.auth.github.clientId,
        clientSecret: process.env.GITHUB_CLIENT_SECRET || config.secrets.auth.github.clientSecret,
        callbackURL: '/auth/github/callback',
        passReqToCallback: true
    }, function(req, accessToken, refreshToken, profile, done) {
        if (req.user) {
            User.findById(req.user.id, function(err, user) {
                user.github = profile.id;
                
                user.tokens.push({
                    kind: 'github',
                    accessToken: accessToken
                });
                
                user.profile.name = user.profile.name || profile.displayName;
                user.profile.picture = user.profile.picture || profile._json.avatar_url;
                user.profile.location = user.profile.location || profile._json.location;
                user.profile.website = user.profile.website || profile._json.blog;

                user.active = true;
                
                user.save(function(err) {
                    done(err, user);
                });
            });
        } else {
            User.findOne({github: profile.id}, function(err, existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }

                User.findOne({email: profile._json.email}, function(err, user) {
                    if (!user) {
                        user = new User();
                    }

                    user.email = profile._json.email;
                    user.github = profile.id;
                    
                    user.tokens.push({
                        kind: 'github',
                        accessToken: accessToken
                    });
                    
                    user.profile.name = profile.displayName;
                    user.profile.picture = profile._json.avatar_url;
                    user.profile.location = profile._json.location;
                    user.profile.website = profile._json.blog;

                    user.active = true;
                    
                    user.save(function(err) {
                        done(err, user);
                    });
                });
            });
        }
    }));
}

exports.isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.json({
        status: 'fail'
    });
};

exports.isAuthorized = function(req, res, next) {
    var provider = req.path.split('/').slice(-1)[0];

    if (_.findWhere(req.user.tokens, {kind: provider})) {
        next();
    } else {
        res.redirect('/auth/' + provider);
    }
};