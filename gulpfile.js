var gulp=require("gulp");
var browserSync=require("browser-sync");
var rename = require('gulp-rename');

//移动文件
gulp.task("movejs",function(){
   return gulp.src([
       "bower_components/jquery/dist/jquery.js",
       "bower_components/**/bootstrap.js",
       "bower_components/**/angular.js",
       "bower_components/**/angular-route.js"
   ])
       .pipe(rename({dirname:''}))
       .pipe(gulp.dest('app/js/lib'))
});
//移动文件
gulp.task("movecss",function(){
   return gulp.src([
       "bower_components/**/bootstrap.css"
   ])
       .pipe(rename({dirname:''}))
       .pipe(gulp.dest('app/css/lib'))
});

gulp.task("browserSync",function(){
    browserSync({
        server:{
            baseDir:'app'
        }
    });
});
gulp.task("watch",['movecss','movejs','browserSync'],function(){
    gulp.watch("app/**/*.html",browserSync.reload);
    gulp.watch("app/**/*.css",browserSync.reload);
    gulp.watch("app/**/*.js",browserSync.reload);
});
