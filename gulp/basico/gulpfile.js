const gulp = require('gulp')
const {series, parralel} = require ('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb){
    console.log('Tarefa de copiar realmente')
    return cb()
}

const fim = cb => {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/.*txt')
    .pipe(gulp.dest('pastaB'))
    // .pipe(imagePelaMetade())
    // .pipe(imageEmpretoEBranco())
    // .pipe(tranformacaoA())
    // .pipe(tranformacaoB())
    return cb()
}

module.exports.default = series(
    antes1,
        antes2,
    copiar,
    fim
    )