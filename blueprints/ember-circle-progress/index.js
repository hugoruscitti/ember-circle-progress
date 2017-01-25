/*jshint node:true*/
module.exports = {
  description: 'ember-circle-progress',

  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('jquery-circle-progress');
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + '/jquery-circle-progress/dist/circle-progress.js');
  }

};
