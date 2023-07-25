import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { copy } from "./gulp/task/copy.js";
import { reset } from "./gulp/task/reset.js";
import { html } from "./gulp/task/html.js";
import { server } from "./gulp/task/server.js";
import { styles } from "./gulp/task/style.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.style, styles);
}

const mainTask = gulp.parallel(copy, html, styles);
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

gulp.task('default', dev);