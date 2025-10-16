// // new dart sass jawn

const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')), // Using dart-sass
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    merge = require('merge-stream'),
    postcss = require('gulp-postcss'),  
    autoprefixer = require('autoprefixer')
;
// Paths
const paths = {
    scss: {
        // Entry file (compiles this file and tracks imports/partials)
        src: 'scss/styles.scss',
        // Watch all scss so partial changes trigger rebuild
        watch: 'scss/**/*.scss',
        dest: 'css'
    },
    js: {
        // Take top-level JS (avoid min folder)
        src: 'js/*.js',
        dest: 'js/min'
    }
};

// Clean task: remove minified source maps (keep styles.css.map for development)
const fs = require('fs');
const path = require('path');

async function clean() {
    const dir = path.resolve(__dirname, 'css');
    try {
        const files = await fs.promises.readdir(dir);
        const targets = files.filter(f => f.endsWith('.min.css.map') || f.endsWith('.map.tmp'));
        await Promise.all(targets.map(f => fs.promises.unlink(path.join(dir, f))));
    } catch (err) {
        // ignore missing directory or other benign errors
        if (err.code !== 'ENOENT') {
            // rethrow unexpected errors so gulp can report them
            throw err;
        }
    }
    // also remove any leftover unminified JS in js/min (keep only -min.js there)
    const jsMinDir = path.resolve(__dirname, 'js/min');
    try {
        const jsFiles = await fs.promises.readdir(jsMinDir);
        const unwanted = jsFiles.filter(f => f === 'perfecthome.js');
        await Promise.all(unwanted.map(f => fs.promises.unlink(path.join(jsMinDir, f))));
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }
}

// SCSS Compilation, Autoprefixing, Minification
function compileScss() {
    // produce both expanded and minified outputs, each with its own sourcemap
    const expanded = gulp.src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        // write expanded CSS and its sourcemap (styles.css + styles.css.map)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scss.dest));

    const minified = gulp.src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        // write minified CSS and its sourcemap (styles.min.css + styles.min.css.map)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scss.dest));

    // merge both streams so gulp sees the task as finished when both complete
    return merge(expanded, minified);
}

// JavaScript Linting, Concatenation, Minification
function compileJs() {
    return gulp.src(paths.js.src)
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter('default')) // Log linting results to console
        // concatenate into perfecthome-min.js and minify
    .pipe(concat('perfecthome.js'))
    // don't write the unminified file to the min folder; instead minify and write only the -min version
    .pipe(uglify())
    .pipe(rename({ suffix: '-min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.dest));
}

// Watch Task
function watchFiles() {
    gulp.watch(paths.scss.watch, compileScss);
    gulp.watch(paths.js.src, compileJs);
}

// Export Tasks
exports.scss = compileScss;
exports.js = compileJs;
exports.watch = watchFiles;
exports.clean = clean;

// build runs clean first, then compile scss and js
exports.build = gulp.series(clean, gulp.parallel(compileScss, compileJs));

exports.default = gulp.series(compileScss, compileJs, watchFiles);
