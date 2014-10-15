/**
 * The public layout.
 */
var Marionette = require('marionette');

module.exports = Marionette.LayoutView.extend({
    template: 'shared/layouts/publicLayout',

    regions: {
        navbarRegion    : '#navbar-region',
        heroRegion      : '#hero-region',
        signinRegion    : '#signin-region',
        contentRegion   : '#content-region',
        footerRegion    : '#footer-region'
    }
});