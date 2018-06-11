'use strict'

const mongoose = require('mongoose');
/*se declara la funcion Schema de mongoose para preparar las esquemas de la bade de datos
en este caso la esquema de la tabla producto*/
const Schema = mongoose.Schema;
/*definimos el esquema de la tabla Produco*/
const ProductShema = Schema({
	name: String,
	picture: String,
	price: { type: Number, default: 0},
	category: { type: String, enum: ['computers', 'phone', 'accesories']},
	description: String 
});

/*exportamos la esquema del modelo*/
module.exports = mongoose.model('Product', ProductShema);

