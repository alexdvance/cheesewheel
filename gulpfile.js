var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (){
  gulp.src(['./css/scss/*.scss'])
    .pipe(sass({
      includePaths: ['./css/scss'],
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', function(){

  // watch me getting Sassy
  gulp.watch(["./css/scss/**/*.scss", "./components/**/*.scss"], function(event){
    gulp.run('sass');
  });
});
