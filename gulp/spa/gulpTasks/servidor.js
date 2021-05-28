const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb){
    return gulp.src('build')
    .pipe(webserver({
        port: 3000,
        open: true,
        livereload: true,
    }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')()) 
    
    return cb()
}

module.exports ={
    monitorarArquivos,
    servidor
}