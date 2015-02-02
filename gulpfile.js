var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var bower = require('bower');

gulp.task('bower', function(cb){
  bower.commands.install([], {save: true}, {})
    .on('end', function(installed){
      cb(); // notify gulp that this task is finished
    });
});

gulp.task('sass', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    //.pipe(csso())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('public/stylesheets/**/*.scss', ['sass']);
  //gulp.watch('public/views/**/*.html', ['templates']);
  //gulp.watch(['public/**/*.js', '!public/app.min.js', '!public/templates.js', '!public/vendor'], ['compress']);
});

gulp.task('default', ['sass', 'watch']);

gulp.task('build', ['bower', 'sass']);