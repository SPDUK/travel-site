var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("it works!");
});

gulp.task('html', function() {
  console.log("imagine something good being used for HTML here");
});

gulp.task('styles', function() {
  console.log("some SASS or post CSS styles here");
});


gulp.task("watch",function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });
  watch ('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });




});
