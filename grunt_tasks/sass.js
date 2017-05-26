module.exports = function(grunt, config){

  grunt.config.merge({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        src: config.sassSrc+'style.scss',
        dest: config.cssDest+'style.css'
      }
    },
    csslint: {
      strict: {
        options: {
          important: 2
        },
        src: "<%= sass.dist.dest %>"
      }
    },
    watch: {
      sass: {
        files: [config.sassSrc+'*.scss'],
        tasks: ['sass', "csslint"],
        options: {
          spawn: false
        }
      }
    }
  });

};
