import less from 'gulp-less';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import prefixer from 'gulp-autoprefixer';
import cleanerCss from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import webpcss from 'gulp-webpcss';
import rename from 'gulp-rename';
import groupCssMediaQueries from 'gulp-group-css-media-queries';


const isDev = process.argv.includes('--dev');
const isProd = !isDev;
// const isLess = process.argv.includes('--less');
const isSass = process.argv.includes('--sass');



export const styles = () => {

    return app.gulp.src(app.plugins.gulpIf(!isSass, 
                app.path.src.style.less, 
                app.path.src.style.sass), 
                { sourcemaps: true },
            )
        .pipe(sourcemaps.init())
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "LESS",
                message: "Error: <%= error.message %"
            })
            ))   
            .pipe(app.plugins.replace(/@img\//g, '../img/'))
            .pipe(groupCssMediaQueries())
            .pipe(app.plugins.gulpIf(!isSass, less(), sass()))
            .pipe(webpcss({
                webClass: ".webp",
                noWebpClass: ".no-webp"
            }))
            .pipe(prefixer({
                grid: true,
                overrideBrowserList: ["last 3 versions"],
                cascade: true
            }))
            .pipe(app.plugins.gulpIf(isProd, cleanerCss({
                level: 2
            })))
            .pipe(sourcemaps.write())
            .pipe(rename({
                    extname: ".min.css"
                }))
                .pipe(app.gulp.dest(app.path.build.styles))
                .pipe(app.plugins.browserSync.stream());
                
                
                
                
                // // const less = gulpSass(dartLess);
                
                // export const less = () => {
                //     // console.log("****************app.path.build.css = ", app.path.build.css)
                //     return app.gulp.src(app.path.src.less, { sourcemaps: true })
                        
                
                //         .pipe(prefixer({
                
                //         }))
                //         .pipe(app.gulp.dest(app.path.build.css))
                //         .pipe(cleanerCss())
                
                //         .pipe(app.gulp.dest(app.path.build.css))
                //         .pipe(app.plugins.browserSync.stream())
                // }
                
}