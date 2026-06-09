const { obtenerPrecioDolarService } = require('../service/precio.service')

exports.obtenerPrecioDolarController = async (req, res) => {
    try {
        const { tipoDolar } = req.params
        const data = await obtenerPrecioDolarService(tipoDolar)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}
