/*jshint node:true*/
module.exports = {
  description: 'ember-circle-progress',

  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('jquery-circle-progress');
  }
};
