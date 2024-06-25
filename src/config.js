requirejs.config({
  baseUrl : 'vendor',
  paths: {
      'config' : '../config',
      'assets' : '../assets',
      'jquery': 'jquery/jquery',
      'underscore': 'underscore/underscore',
      'backbone': 'backbone/backbone',
      'text': 'requirejs-text/text',
      'bootstrap': 'bootstrap/js/bootstrap.bundle'
  }
});

requirejs(['backbone','bootstrap','assets/js/routes/router'], function(Backbone, Bootstrap, Router) {
  window.app = new Router();
  Backbone.history.start();
});