/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  // Todo Model
  // ----------

  app.Todo = Backbone.Model.extend({
    defaults: {
      title: '',

      completed: false
    }
  })


})();
