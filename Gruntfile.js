module.exports = function(grunt) {
    //grunt wrapper function
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
          //grunt task configuration will go here
        ngAnnotate: {
          options: {
              singleQuotes: true
          },
          app: {
              files: {
                  './ng-annotate-safe/js/z2u.converter.js': ['./core/z2u.converter.js']
              }
          }
        },
        uglify: {
          build: {
            files: {
              './dist/ng-z2u.min.js': ['./ng-annotate-safe/js/z2u.converter.js']
            }
          }
        }
    });
    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');

    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);
}
//To run
//1. grunt ngAnnotate (to annotate)
//2. grunt uglify (to minify)
