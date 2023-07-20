import gulp from "gulp";

import { path } from "./docs/config/path.js";

global.app = {
    path: path,
    gulp:gulp
}


import { copy } from "./docs/task/copy.js";

gulp.task('defualt', copy);