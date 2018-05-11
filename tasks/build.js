// 串联 各个人物

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; // 处理任务之间的先后顺序
// ['browser', 'serve'] 表示任务放在最后执行 serve 为最后执行项
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));