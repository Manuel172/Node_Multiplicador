// opt1: paquetes que creamos nosotros dentro del proyecto
// const multi = require('./multiplicar/multiplicar.js');
// multi.generaTabla()  para usarlo
// op2: destructuracion 
const argv = require('./config/yargs.js').argv;
const colors = require('colors/safe');
const { generaTabla, listarTabla } = require('./multiplicar/multiplicar.js');

// En el parametro "_" vienen todos los que no tienen valor
console.log(argv._);
let comando = argv._[0];
// console.log(argv.base);
// console.log(argv.limite);

switch (comando) {
    case 'listar':
        console.log('Listar'.blue);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear'.blue);
        generaTabla(argv.base, argv.limite).then(archivo => {
            console.log(colors.blue(`tabla creada ${archivo}`));
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('comando no reconocido'.red);
        break;
}