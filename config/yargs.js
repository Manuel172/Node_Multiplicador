const opt = {
    base: { demand: true, alias: 'b', default: 1 },
    limite: { alias: 'l', default: 10 }
};

const argv = require('yargs')
    .command('listar', 'Listar tablas de multiplicar según parámetro de entrada', opt)
    .command('crear', 'Genera archivo tablas de multiplicar según parámetro de entrada', opt)
    .help()
    .argv;

module.exports = {
    argv: argv
};