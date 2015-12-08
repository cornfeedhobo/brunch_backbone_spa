application = require('../application')

module.exports = Backbone.Router.extend(

  routes: '': 'index'

  index: ->
    $('body').html application.indexView.render().el
    return

)