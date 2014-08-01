var App = require('app');
var AppHeaderView = require('modules/header/views/appHeaderView');

module.exports = {
    show: function() {
        console.log(App.vars.user);

        var appHeaderView = new AppHeaderView({model: App.vars.user});

        App.appLayout.headerRegion.show(appHeaderView);

        App.vent.trigger('appHeaderController:show');
    }
};