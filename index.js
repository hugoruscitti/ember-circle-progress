'use strict';

module.exports = {
  name: 'ember-circle-progress',
  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/circle-progress.js');
  }
};
