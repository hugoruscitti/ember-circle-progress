/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-circle-progress',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + '/jquery-circle-progress/dist/circle-progress.js');
  }

};
