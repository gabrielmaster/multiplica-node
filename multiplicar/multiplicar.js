const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let tabla = '';

        if (!Number(base)) {
            reject(`El valor de base introducido ${ base } no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor de limite introducido ${ limite } no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            tabla += `${ base } * ${ i } = ${ base*i }\n`;
        }

        resolve(tabla);

    });



}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, 'utf8', (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });

};


module.exports = {
    crearArchivo,
    listarTabla
}