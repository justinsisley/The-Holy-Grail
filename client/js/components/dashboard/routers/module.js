var Marionette = require('marionette');
var controller = require('components/dashboard/controllers/module');

module.exports = Marionette.AppRouter.extend({
    controller: controller,

    appRoutes: {
        'dashboard': 'dashboard'
    }
});