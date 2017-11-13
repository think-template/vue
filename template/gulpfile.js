const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const webpack = require('webpack-stream');

const webpackConfig = require('./client/build/webpack.prod.conf');

gulp.task('build', (done) => {
    return gulp.src('./client/src/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./client/dist/'));
});
gulp.task('clean', (done) => {
    del([
        './www/static/**/*.js.*',
        './www/static/**/*.css',
        './view/*.html'
    ]);
    done();
});
gulp.task('moveJS', () => {
    return gulp.src('./client/dist/static/js/*')
        .pipe(gulp.dest('www/static/js'));
});
gulp.task('moveCSS', () => {
    return gulp.src('./client/dist/static/css/*.css')
        .pipe(gulp.dest('www/static/css'));
});
gulp.task('moveHtml', () => {
    return gulp.src('./client/dist/index.html')
        .pipe(rename('index_index.html'))
        .pipe(gulp.dest('view'));
});

gulp.task('default', gulp.series('build', 'clean', 'moveJS', 'moveCSS', 'moveHtml'));
