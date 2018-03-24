/* eslint-env node */
module.exports = {
  description: "ember-circle-progress",
  name: "ember-circle-progress",
  normalizeEntityName: function() {},
  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/circle-progress.js');
  }
};
