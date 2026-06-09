const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())



const routerPrecio = require('./router/precio.router')
app.use('/', routerPrecio)

app.get('/', (req, res) => {
    res.status(200).send('Servidor corriendo')
})


module.exports = app