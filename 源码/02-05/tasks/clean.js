import gulp from 'gulp';
import del from 'del';
import args from './util/args';

//删除文件
gulp.task('clean',()=>{
return del(['server/public','server/views'])
})