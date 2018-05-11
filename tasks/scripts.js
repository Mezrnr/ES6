// js 编译任务脚本 

import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat'; //文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream'; // gulp 处理文件流 ；结合webpack
import named from 'vinyl-named'; // 重命名标志
import livereload from 'gulp-livereload'; // 实时刷新
import plumber from 'gulp-plumber'; // 处理文件信息流 
import rename from 'gulp-rename'; // 重命名
import uglify from 'gulp-uglify';
import {
    log,
    colors
} from 'gulp-util'; // 对命令行修饰
import args from './util/args'; // 对命令行解析

// 添加 babel
// npm i babel-loader babel-core babel-preset-env --save-dev
// 编辑 .babelrc  npm i --save-dev babel-preset-es2015

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        // 使用 plumber 结合 webpack 判断 错误信息
        .pipe(plumber({
            errorHandler: function () {

            }
        }))
        // 文件重新命名
        .pipe(named())
        // 用 webpack 对 js 进行编译 
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }), null, (err, stats) => {
            // 处理错误情况
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        // 指定编译路径  
        .pipe(gulp.dest('server/public/js'))
        // 复制 一份 重命名
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // 压缩
        .pipe(uglify({
            compress: {
                properties: false
            },
            output: {
                'quote_keys': true
            }
        }))
        .pipe(gulp.dest('server/public/js'))
        // 判断 命令行中是否 有watch 这个参数 而是否监听
        .pipe(gulpif(args.watch, livereload()))
})