import gulp from "gulp";

import { path } from "./gulp/config/path.js";

import { plugins } from "./gulp/config/plugins.js";


global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}


import { copy } from "./gulp/task/copy.js";
import { reset } from "./gulp/task/reset.js";
import { html } from "./gulp/task/html.js";
import { server } from "./gulp/task/server.js";


function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTask = gulp.parallel(copy, html);
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

gulp.task('default', dev);