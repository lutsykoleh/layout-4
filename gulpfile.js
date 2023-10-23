const {src, dest, watch, parallel, series} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');


function styles() {
    return src('app/scss/**/*.scss')
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions']}))
        .pipe(concat('style.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src('app/js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

 

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/main.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function cleanDist() {
    return src('dist')
        .pipe(clean());
}


function building(){
    return src([
        'app/*.html',
        'app/css/style.min.css',
        'app/js/main.min.js'
    ], {base: 'app'})
    .pipe(dest('dist'))
}   

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = series(cleanDist, building);
exports.default= parallel(styles, scripts, browsersync, watching);