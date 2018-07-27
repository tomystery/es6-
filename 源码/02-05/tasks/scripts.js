import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp的if语句
import concat from 'gulp-concat';
import webpack from 'webpack';//打包安装
import gulpWebpack from 'webpack-stream';//webpack流
import named from 'vinyl-named';//文件名标识
import livereload from 'gulp-livereload';//热加载
import plumber from 'gulp-plumber';//对gulp的错误进行处理
import rename from 'gulp-rename';//文件重命名
import uglify from 'gulp-uglify';//文件压缩
import {log,colors} from 'gulp-util';//对信息流处理
import args from './util/args';

gulp.task('scripts',()=>{
return gulp.src(['app/js/index.js'])
.pipe(plumber({//对gulp进行错误处理
errorHandle:function(){

}
}))
.pipe(named())//进行文件标识
.pipe(gulpWebpack({//加载webpack模块，进行相应的打包解析
module:{
loaders:[{
test:/\.js$/,
loader:'babel'
}]
}
}),null,(err,stats)=>{
log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
chunks:false
}))
})
.pipe(gulp.dest('server/public/js'))//将文件拷贝至服务器目录
.pipe(rename({//对拷贝后的文件进行重命名
basename:'cp',
extname:'.min.js'
}))
.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))//对拷贝后的文件进行压缩
.pipe(gulp.dest('server/public/js'))//将压缩后的文件至服务器目录
.pipe(gulpif(args.watch,livereload()))//用gulp if语句判断是否处于watch命令下如果是就热加载
})