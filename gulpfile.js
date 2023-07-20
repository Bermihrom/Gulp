import gulp from "gulp";

import { path } from "./docs/config/path.js";

global.app = {
    path: path,
    gulp:gulp
}


import { copy } from "./docs/task/copy.js";
import { reset } from "./docs/task/reset.js";

function watcher(){
    gulp.watch(path.watch.files, copy)
}
const dev = gulp.series(reset, copy, watcher);

gulp.task('defualt', dev);