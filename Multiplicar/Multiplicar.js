// viene incluida en node
const fs = require('fs');
const colors = require('colors');
// no vienen en node, se debe instalar antes de usar
//const fs = require('express');
// paquetes que creamos nosotros dentro del proyecto
//const fs = require('./myfsexpress');

let listarTabla = (base, limite = 10) => {
    let tablas = '';
    if (!Number(base)) {
        reject('Base no es un numero');
        return;
    }
    if (!Number(limite)) {
        reject('Límite no es un Numero');
        return;
    }

    for (let i = 1; i < limite + 1; i++) {
        tablas += `${base} * ${i} = ${base * i}\n`;
    }
    console.log('=========================='.blue);
    console.log(`tabla del ${base}`.red);
    console.log('=========================='.blue);
    console.log(tablas);
};

let generaTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let tablas = '';

        if (!Number(base)) {
            reject('base no es un número');
            return;
        }

        if (!Number(limite)) {
            reject('limite no es un número');
            return;
        }

        for (let i = 1; i < limite + 1; i++) {
            tablas += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, tablas, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}-al-${limite}.txt`);
        });

    });

};

module.exports = {
    generaTabla: generaTabla,
    listarTabla: listarTabla
}