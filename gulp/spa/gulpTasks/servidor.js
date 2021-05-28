const gulp = require('gulp')
const webserver = require('gulp-webserver')

function servidor(cb){
    return gulp.src('build')
    .pipe(webserver({
        port: 3000,
        open: true,
        livereload: true,
    }))
}

function monitorarArquivos(cb){
    return cb()
}

module.exports ={
    monitorarArquivos,
    servidor
}