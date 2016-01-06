
// Include gulp
var gulp = require('gulp');
// Include gulp-concat plugins
var concat = require('gulp-concat');
// Include gulp-uglify plugins
var uglify = require('gulp-uglify');
// Include gulp-rename plugins
var rename = require('gulp-rename');

// Create Gulp task(register a function with name script) that Concatenate JS Files
gulp.task('berg-scripts', function() {

    return gulp.src('src/*.js')
      		   .pipe(concat('main.js'))
      		   .pipe(gulp.dest('build/js'));

});
 // Default Task
gulp.task('default', ['scripts']);

/*********
 ********/
gulp.task('berg-minifyScript',function(){
	return gulp.src('src/*.js')
			   .pipe(concat('main.js'))//concate all file js in one file named main.js
			   .pipe(rename({suffix: '.min'}))//Rename this file in main.min.js
			   .pipe(uglify())//Minify the code js
			   .pipe(gulp.dest('build/js'));//export the result file into folder build/js
});

gulp.task("default-plus",['minifyScript']);

/*********

 ********/
gulp.task('berg-watch', function() {
   // Watch .js files
  gulp.watch('src/*.js', ['berg-minifyScript']);
  //  // Watch .scss files
  // gulp.watch('src/scss/*.scss', ['sass']);
  //  // Watch image files
  // gulp.watch('src/images/**/*', ['images']);
 });

gulp.task('default-after-plus', ['berg-minifyScript','berg-watch']);