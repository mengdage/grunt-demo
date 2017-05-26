module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var config = grunt.file.readYAML('Gruntconfig.yml');
  //123

  require('./grunt_tasks/sass.js')(grunt, config);
  require('./grunt_tasks/javascript.js')(grunt, config);

  grunt.registerTask('default', [
    'jshint:all',
    'jshint:beforeconcat',
    'concat',
    'jshint:afterconcat',
    'sass',
    'watch'
  ]);

};
