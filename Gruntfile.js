'use strict';

require('source-map-support').install();

module.exports = function(grunt) {

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: 'inline',
        plugins: ['transform-runtime'],
      },
      build: {
        src: '**/*.js',
        expand: true,
        cwd: 'src',
        dest: 'build',
      },
    },
    eslint: {
      src: {
        options: {
          configFile: '.eslintrc-es2015.yaml',
        },
        src: 'src/**/*.js',
      },
      examples: {
        options: {
          configFile: '.eslintrc-es2015.yaml',
        },
        src: 'examples/**/*.js',
      },
      root: {
        options: {
          configFile: '.eslintrc-node.yaml',
        },
        src: '*.js',
      },
      test: {
        options: {
          configFile: '.eslintrc-mocha.yaml',
        },
        src: 'test/**/*.js',
      },
    },
    clean: {
      build: 'build',
    },
    mochaTest: {
      unit: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: true,
          require: [
            'babel-register',
            'test/globals',
          ],
        },
        src: 'test/src/*.js',
      },
    },
    watch: {
      options: {
        spawn: false,
      },
      src: {
        files: ['<%= eslint.src.src %>'],
        tasks: ['eslint:src', 'mochaTest', 'build'],
      },
      root: {
        files: ['<%= eslint.root.src %>'],
        tasks: ['eslint:root'],
      },
      test: {
        files: ['<%= eslint.test.src %>'],
        tasks: ['eslint:test', 'mochaTest'],
      },
      lint: {
        options: {
          reload: true,
        },
        files: ['.eslintrc*', 'eslint/*'],
        tasks: ['eslint'],
      },
    },
  });

  grunt.registerTask('test', ['eslint', 'mochaTest']);
  grunt.registerTask('build', ['test', 'clean', 'babel']);
  grunt.registerTask('default', ['watch']);

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
};
