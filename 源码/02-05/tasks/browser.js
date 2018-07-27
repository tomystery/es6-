import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

//监听文件将改动的文件加至服务器中
gulp.task('browser',(cb)=>{
if(!args.watch) return cb();
gulp.watch('app/**/*.js',['scripts']);
gulp.watch('app/**/*.ejs',['pages']);
gulp.watch('app/**/*.css',['css']);
});