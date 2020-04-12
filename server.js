const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get('/auth', function(req, res) {
    console.log('Entrou em auth')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Listening on port: " + port)
})