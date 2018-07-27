import yargs from 'yargs';
const args = yargs
    .option('production', {  //来确认命令行输入的有没有这个值，从而确认是线上还是开发环境
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    .option('watch', { //监听开发环境中修改的这些文件，比如我改了一个js要不要自动编译啊
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    //要不要详细的输出命令行输出的日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    // 要不要映射的一个问题
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })

    //要启动一个服务器就要一个端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    //表示对输入的命令行内容以字符串作为解析
    .argv

    export default args;