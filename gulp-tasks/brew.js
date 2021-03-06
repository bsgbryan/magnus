const gulp = require('gulp');
const coffee = require('gulp-coffee');
const conf = require('../gulp-conf/base');

gulp.task('brew:code:dev', function brewCode() {
  return gulp.src(conf.path.lib('**/*.litcoffee'), { sourcemaps: true })
    .pipe(coffee({ bare: true }))
    .pipe(gulp.dest(conf.path.tmp()));
  }
);

gulp.task('brew:code:dist', function brewCode() {
  return gulp.src(conf.path.lib('**/*.litcoffee'), { sourcemaps: false })
    .pipe(coffee({ bare: true }))
    .pipe(gulp.dest(conf.path.dist()));
  }
);

gulp.task('brew:tests', function brewTests() {
  return gulp.src(conf.path.test('**/*.spec.litcoffee'), { sourcemaps: true })
    .pipe(coffee({ bare: true }))
    .pipe(gulp.dest(conf.path.tmp()));
  }
);
