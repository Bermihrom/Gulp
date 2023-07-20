import gulp from "gulp";

import { path } from "./docs/config/path.js";

global.app = {
    path: path,
    gulp:gulp
}


import { copy } from "./docs/task/copy.js";
function watcher(){
    gulp.watch(path.watch.files, copy)
}
const dev = gulp.series(copy, watcher);

gulp.task('defualt', dev);