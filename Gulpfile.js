var gulp = require("gulp"),
    sass = require("gulp-sass")
    mocha = require("gulp-mocha");

gulp.task("default", ["test", "sass"]);

gulp.task("test", function(){
  gulp.src("test/test_sass.js", {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task("sass", function(){
  return gulp.src('./src/wazooie.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task("watch", function(){
  gulp.watch("./src/**/*.scss", ["sass", "test"]);
});
