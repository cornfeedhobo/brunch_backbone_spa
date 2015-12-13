var application;

application = require('../application');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'index'
    },
    index: function () {
        $('body').html(application.indexView.render().el);
    }
});
