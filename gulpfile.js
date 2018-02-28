var gulp = require('gulp');
    connect = require('gulp-connect');
    const jshint = require('gulp-jshint');

gulp.task('jshint',function(){
    return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
})

gulp.task('webserver',function(){
    connect.server();
})

gulp.task('watch',function(){
    gulp.watch('js/*.js',['jshint']);
    
})
gulp.task('default',function(){
    gulp.start('jshint','webserver');
});


