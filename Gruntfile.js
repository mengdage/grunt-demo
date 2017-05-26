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
    },
    jshint: {
      all: ['Gruntfile.js'],
      beforeconcat: config.jsSrc+'**/*.js',
      afterconcat: config.jsDest+'**/*.js'
    },
    watch: {
      scripts: {
        files: [config.jsSrc+'**/*.js'],
        tasks: ['jshint:all', 'jshint:beforeconcat', 'concat', 'jshint:afterconcat'],
        options: {
          spawn: false
        }
      },
      sass: {
        files: [config.sassSrc+'*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jshint:all',
    'jshint:beforeconcat',
    'concat',
    'jshint:afterconcat',
    'sass',
    'watch'
  ]);

};
