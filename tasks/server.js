// 处理服务器的脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // gulp 启动服务器
import args from './util/args';

gulp.task('serve', (cb) => {
    // 如果不是处于监听 
    if (!args.watch) return cb();

    // 创建服务器 --harmony 在这个命令下启动这个脚本
    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    // 浏览器自动刷新 使用gulp.watch监听文件的变动
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function (file) {
        // 通知服务器 文件修改
        server.notify.apply(server, [file]);
    })

    // 监听 需要重启服务的文件
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
        // 重启服务
        server.start.bind(server)()
    });
})