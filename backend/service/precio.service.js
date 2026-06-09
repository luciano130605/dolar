const { obtenerPrecioDolarRepository } = require("../repository/precio.repository")
const obtenerPrecioRepository = require('../repository/precio.repository')
const { dolar } = require('../types/dolar.types')

exports.obtenerPrecioDolarService = async (tipoDolar) => {

    if (!dolar.includes(tipoDolar)) {
        throw new Error('Tipo de dolar invalido')
    }

    const precioDolar = await obtenerPrecioDolarRepository(tipoDolar)
    return { nombre: precioDolar.nombre, compra: precioDolar.compra, venta: precioDolar.venta, fecha: precioDolar.fechaActualizacion }

}

