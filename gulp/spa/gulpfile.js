const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML,appCss,appJs,appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appCss, appHTML, appJs, appIMG),
        series(depsFonts, depsCSS)
    ),
    servidor,
    monitorarArquivos
)