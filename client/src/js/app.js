'use strict';

var $ = require('jquery'),
   Backbone = require('backbone');

Backbone.$ = $;

var Router = require('./router'),
  WatchFace = require('./framework/watchFace');

var App = {

  navigate: function (route) {
    App.router.navigate(route, true);
  },

  start: function() {

    // App.navigate = navigate;

    this.router = new Router();

    this.watchFace = new WatchFace();

    // FIXME Make a view for the watch and make these regular view events
    // Don't trigger them on the router
    $('#button-right').on('click', function() {
      App.router.currentView.trigger('right');
    });

    $('#button-top').click(function() {
      App.router.currentView.trigger('top');
    });

    $('#button-bottom').click(function() {
      App.router.currentView.trigger('bottom');
    });

    $('#button-left').click(function() {
      App.router.currentView.trigger('left');
    });

    $('#watch-face').click(function() {
      App.router.currentView.trigger('face');
    });

    Backbone.history.start();

  }

};

global.App = App;

module.exports = App;
