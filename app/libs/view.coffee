# Base class for all views
module.exports = Backbone.View.extend(

  initialize: ->
    @render = _.bind(@render, this)
    return

  template: ->

  getRenderData: ->

  render: ->
    @$el.html @template(@getRenderData())
    @afterRender()
    this

  afterRender: ->

)