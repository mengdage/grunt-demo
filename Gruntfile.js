module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');

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
