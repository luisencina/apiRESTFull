'use strict'

/*se importa mongoose(driver para utilizar mongo)*/
const mongoose = require('mongoose');
const app = require('./app');

const config = require('./config');

mongoose.connect(config.db, (err, res) =>{
	if (err) {
		return console.log(`Error al conectar al bd: ${err}`);
	}
	console.log('Conexion con la Bade de Datos establecida...');
	
	app.listen(config.port, () => {
	console.log(`API REST corriendo en htpp://localhost:${config.port}`); 
});	
});

