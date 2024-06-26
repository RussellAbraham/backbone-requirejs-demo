define(['backbone'], function (Backbone) {

  var HomeModel = Backbone.Model.extend({
    defaults: {
      title: "Welcome to the Application",
      description: "This application is a demo showcasing the capabilities of Backbone.js and RequireJS. It features a modular architecture, efficient data binding, and a responsive design."
    }
  });

  return HomeModel;

});