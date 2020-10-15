//import
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

// starting library
const server = express()
server

//using static files
    .use(express.static('public'))

    .set('views', path.join(__dirname, 'views'))
    .set('view engine','hbs')

//creata a rote
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)


//Turn on the server 
server.listen(5500)
