'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    html2js: {
      options: {
        base: 'app',
        module: 'capFinPlanning.templates',
        singleModule: true,
        useStrict: true,
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: false,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      main: {
        src: ['app/views/**/*.html'],
        dest: 'app/config/template-cache/compiled_template_cache.js'
      }
    },


    clean: {
      templates: ['app/config/template-cache']
    },

    watch: {
      src: {
        files: ['app/views/**/*.html'],
        tasks: ['compile']
      }
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html2js');

  // grunt.registerTask('test', 'Clean and run the tests.', [
  //   'clean',
  //   'jshint',
  //   'html2js:main'
  // ]);

  grunt.registerTask('compile', 'Generate template cache.', [
    'clean',
    'html2js:main'
  ]);

  grunt.registerTask(
    'default',
    'Watch files and run jshint and tests on changes.', [
      'watch'
    ]
  );

};