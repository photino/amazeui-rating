'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var docUtil = require('amazeui-doc-util');
var runSequence = require('run-sequence');
var tasks = require('amazeui-gulp-tasks');

var config = {
  pkg: require('./package.json'),

  // release task
  ghPages: {
    src: 'dist/**/*',
    options: {
      branch: 'gh-pages'
    }
  },

  // remote branch
  git: {
    branch: 'master'
  },

  browserSync: {
    notify: false,
    server: 'dist',
    logPrefix: 'AMP'
  },

  // watch files and reload browserSync
  bsWatches: 'dist/**/*',

  // docs:md
  md: {
    src: ['README.md', 'docs/*.md'],
    data: {
      pluginTitle: 'Amaze UI Rating',
      pluginDesc: 'Amaze UI风格的评分插件',
      buttons: 'photino/amazeui-rating'
    },
    rename: function(file) {
      file.basename = file.basename.toLowerCase();
      if (file.basename === 'readme') {
        file.basename = 'index';
      }
      file.extname = '.html';
    },
    dist: function(file) {
      if (file.relative === 'index.html') {
        return 'dist';
      }
      return 'docs';
    }
  },

  // uglify js
  uglify: {
    src: './src/amazeui.rating.js',
    dist: './dist',
    banner: true
  },

  // clean path
  clean: 'dist'
};

// init tasks
tasks(gulp, config);

gulp.task('copy', function() {
  return gulp.src('./src/*.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function (callback) {
  runSequence('clean', ['copy', 'uglify',  'markdown'], callback);
});

gulp.task('default', ['build', 'server']);
