import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
if(!args.watch) return cb();//判断是否处于watch命令下，如果不是直线cb回调函数

var server = liveserver.new(['--harmony','server/bin/www']);//新建服务器
server.start();//启动服务器
//如果服务器中的文件发生变化，则刷新浏览器
gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
server.notify.apply(server,[file]);
})
//如果是服务器中的路由配置等发生变化则重启浏览器
gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
server.start.bind(server)()
});
})