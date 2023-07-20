import gulp from "gulp";

import { path } from "./gulp/config/path.js";

global.app = {
    path: path,
    gulp: gulp,
}


import { copy } from "./gulp/task/copy.js";
import { reset } from "./gulp/task/reset.js";


function watcher(){
    gulp.watch(path.watch.files, copy)
}

const dev = gulp.series(reset, copy, watcher);

gulp.task('default', dev);