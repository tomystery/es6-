import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; //能作为启动服务器的一个包
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();

    var server=liveserver.new(['--harmony','server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]); //服务器的某些路由发生变化就要服务重启
    })

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){  //让服务重启,调用启动的server
        server.start.bind(server)()
    })
})