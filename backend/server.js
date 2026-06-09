const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const HOSTNAME = '127.0.0.1'
const PORT = 3100

const routerPrecio = require('./router/precio.router')
app.use('/', routerPrecio)

app.get('/', (req, res) => {
    res.status(200).send('Servidor corriendo')
})

app.listen(PORT, HOSTNAME, (req, res) => {
    console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}`)
})

module.exports = app