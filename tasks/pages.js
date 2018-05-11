// 处理模板编译的脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', () => {
    return gulp.src('app/**/*.ejs') // 所有文件下的 .ejs
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()))
})