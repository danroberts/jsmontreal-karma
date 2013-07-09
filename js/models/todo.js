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
    },

    // Toggle the `completed` state of this todo item.
    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    }
  })




})();
