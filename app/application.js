var Application;

Application = {
    initialize: function () {
        var IndexView, Router;
        Router = require('./libs/router');
        IndexView = require('./views/index');
        this.router = new Router;
        this.indexView = new IndexView;
        if (typeof Object.freeze === 'function') {
            Object.freeze(this);
        }
    }
};

module.exports = Application;

