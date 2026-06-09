const axios = require('axios')

exports.obtenerPrecioDolarRepository = async (tipoDolar) => {
    const respuesta = await axios.get(`https://dolarapi.com/v1/dolares/${tipoDolar}`)
    return respuesta.data
}
