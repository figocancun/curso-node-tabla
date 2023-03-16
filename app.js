
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();


console.log('base: yargs', argv.b, 'Valor de listar: ', argv.l, 'valor de hasta', argv.h);

crearArchivo(argv.b, argv.l, argv.h)
  .then(NombreArchivo => console.log(`${NombreArchivo.rainbow} creado`))
  .catch(err => console.log(err));