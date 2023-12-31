import replace from "gulp-replace"
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import browserSync from "browser-sync"
import gulpIf from "gulp-if"
import sourcemaps from 'gulp-sourcemaps';
import newer from 'gulp-newer';


export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    gulpIf: gulpIf,
    sourcemaps: sourcemaps,
    newer: newer,
}