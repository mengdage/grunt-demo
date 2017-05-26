module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'dist/css/style.css': 'src/sass/style.scss'
        }

      }
    }
  });

  grunt.registerTask('default', [
    'sass'
  ]);

};
