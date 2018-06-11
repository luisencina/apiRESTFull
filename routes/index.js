'use strict'

const express = require('express');
const productCtrl = require('../controllers/product');
const api = express.Router();

/*gestionar las rutas API REST*/
/*get*/
api.get('/product', productCtrl.getProducts);
/*get recurso id*/
api.get('/product/:productId', productCtrl.getProduct);
/*post recurso*/
api.post('/product', productCtrl.saveProduct);
/*put recurso*/
api.put('/product/:productId' , productCtrl.updateProduct);
/*delete recurso*/
api.delete('/product/:productId', productCtrl.deleteProduct);


module.exports = api;