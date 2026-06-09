const express = require('express')
const routerPrecio = express.Router()

const { obtenerPrecioDolarController } = require('../controller/precio.controller')

routerPrecio.get('/dolar/:tipoDolar', obtenerPrecioDolarController)

module.exports = routerPrecio 