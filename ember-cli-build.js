/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  app.import('bower_components/jquery-circle-progress/dist/circle-progress.js');

  return app.toTree();
};
