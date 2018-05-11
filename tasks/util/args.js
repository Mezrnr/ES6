// 处理命令行参数脚本

import yargs from 'yargs';

//eg: gulp -production
const args = yargs
    // 生产环境
    .option('production', {
        boolean: true, // 设置该选项 为 boolean 类型
        default: false, // 设置默认值
        describe: 'min all scripts ' //描述
    })
    // 监听
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files '
    })
    // 输出日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    // js 压缩
    .option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })
    // 端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })
    // 对输入命令行的内容以字符串解析
    .argv


    export default args;
