import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';//gulp中处理文件拼接的
import webpack from 'webpack';//打包的
import gulpWebpack from 'webpack-stream';//gulp文件基于stream
import named from 'vinyl-named';//文件重命名做标志的
import liverload from 'gulp-livereload';//热监听的包
import plumber from 'gulp-plumber';//处理文件信息流的包
import rename from 'gulp-rename';//对文件重命名
import uglify from 'gulp-uglify';//js压缩的
import {log,colors} from 'gulp-util';//在命令行输出的一些包 色彩输出
import args from './util/args';//对命令行参数解析的包

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
    .pipe(plumber({
        errorHandle:function(){

        }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
        module:{
            loaders:[{
                test:/.js$/,
                loader:'babel'
            }]
        }
    }),null,(err,stats)=>{
        log(`Finished'${colors.cyan('scripts')}'`,stats.toString({
            chunks:false
        }))
    })
    .pipe(gulp,defaultStatus('server/public/js'))
    .pipe(rename({
        basename:'cp',
        extname:'.min.js'//可以理解为重新复制了一份，还要压缩
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}})) //压缩
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload())) //监听文件变化
})