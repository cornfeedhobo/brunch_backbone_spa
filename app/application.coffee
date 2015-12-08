Application = initialize: ->
  Router = require('./libs/router')
  IndexView = require('./views/index')
  @router = new Router
  @indexView = new IndexView
  if typeof Object.freeze == 'function'
    Object.freeze this
  return

module.exports = Application
