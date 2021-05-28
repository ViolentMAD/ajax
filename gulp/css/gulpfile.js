const { parallel } = require ('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

function transformacaoCSS(){
    return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({"uglify":true}))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)