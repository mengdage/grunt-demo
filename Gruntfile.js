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
    },
    concat: {
      dist: {
        src: ['src/js/**/*.js'],
        dest: 'dist/js/app.js'
      }
    }
  });

  grunt.registerTask('default', [
    'sass',
    'concat'
  ]);

};
