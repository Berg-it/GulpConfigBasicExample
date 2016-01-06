# GulpConfigBasicExample
 
npm init: create node project
npm install gulp --save-dev; install gulp locally
gulpfile.js : This file will contain the instructions for what you want Gulp to actually do



Note:
We’ll add some tasks to this file in a moment, but first it is perhaps worth just quickly introducing the four 
Gulp methods that we will be using:-

gulp.task(name, fn) – registers a function with a name
gulp.watch(glob, fn) – runs a function when a file that matches the glob changes
gulp.src(glob) – returns a readable stream
gulp.dest(folder) – returns a writable stream


npm install gulp-concat --save-dev: To concatenate files we’ll need it
gulp-uglify: Minify the JavaScript code
gulp-rename: rename the script file
npm install --save-dev gulp-ruby-sass: Preprocess CSS with Gulp
require('gulp-imagemin');//to Image Optimisation with Gulp


Watching for Changes
This is all very useful, but at the moment we’re needing to run Gulp each time we make a change to a file, which isn’t all that clever. The good news is that Gulp can watch for changes and automatically run the tasks

see task berg-minifyScript
see task berg-scripts
