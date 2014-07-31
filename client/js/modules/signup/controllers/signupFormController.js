var validator   = require('validator');
var settings    = require('../../../constants/settings');
var strings     = require('../../../constants/strings');

var controller = {
    submit: function(email, password, callback) {
        if (!email) {
            return callback(strings.noEmail);
        }

        if (!validator.isEmail(email)) {
            return callback(strings.invalidEmail);
        }

        if (!password) {
            return callback(strings.invalidPassword);
        }

        if (password.length < settings.MINIMUM_PASSWORD_LENGTH) {
            return callback(strings.shortPassword);
        }

        $.post('/users/signup', {
            email: email,
            password: password
        }).done(function(response) {
            if (!response || response.status !== 'success') {
                return callback(response.message || 'Unable to signup');
            }

            return callback(null, strings.activationSent);
        }).fail(function(response) {
            var message = response && response.message;

            return callback(message || 'Something went wrong');
        });
    }
};

module.exports = controller;