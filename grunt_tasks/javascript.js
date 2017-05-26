module.exports = function (grunt, config) {
  // merge
  grunt.config.merge({
    concat: {
      dist: {
        src: [config.jsSrc+'/**/*.js'],
        dest: config.jsDest+'/app.js'
      }
    },
    watch: {
      scripts: {
        files: "<%= concat.dist.src %>",
        tasks: ['jshint:all', 'jshint:beforeconcat', 'concat', 'jshint:afterconcat'],
        options: {
          spawn: false
        }
      }
    },
    jshint: {
      all: ['./Gruntfile.js', './grunt_tasks/*.js'],
      beforeconcat: config.jsSrc+'**/*.js',
      afterconcat: config.jsDest+'**/*.js'
    }
  });

};
