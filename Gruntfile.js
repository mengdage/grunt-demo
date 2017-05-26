module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var config = grunt.file.readYAML('Gruntconfig.yml');

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        src: config.sassSrc+'style.scss',
        dest: config.cssDest+'style.css'
      }
    },
    concat: {
      dist: {
        src: [config.jsSrc+'/**/*.js'],
        dest: config.jsDest+'/app.js'
      }
    }
  });

  grunt.registerTask('default', [
    'sass',
    'concat'
  ]);

};
