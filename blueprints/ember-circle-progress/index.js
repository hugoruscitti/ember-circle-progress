/* eslint-env node */
module.exports = {
  description: "ember-circle-progress",
  name: "ember-circle-progress",

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/circle-progress.js');
  }
};
