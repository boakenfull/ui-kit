var gulp = require("gulp");
var mocha = require("gulp-mocha");

gulp.task("default", function(){
    gulp.src('test/test_sass.js', {read: false})
      .pipe(mocha({reporter: 'nyan'}));
});
