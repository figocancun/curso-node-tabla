const fs = require('fs');
require('colors');
const crearArchivo = async(base = 5, listar, hasta) => {
  try {
    let salida = '';
    let consola = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base.toString().yellow} ${'x'.magenta} ${i.toString().blue} ${'='.cyan} ${(base * i).toString().red}\n`; 
      consola += `${base} x ${i} = ${base * i}\n`; 
    }
    console.log('Tabla de multiplicar del: ', base);
    if (listar) console.log(salida);
    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivo
}