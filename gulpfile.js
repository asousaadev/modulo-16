// importação do gulp

const gulp = require('gulp');


function funcaoPadrao(callback){
    console.log("Execultando via gulp");
    callback();
}

function dizOi(callback){
    console.log("Óla Gulp");
    dizTchau();
    callback();
}

// função privada

function dizTchau(){
    console.log("Tchau Gulp");
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;