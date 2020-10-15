//import
const express = require('express');
const path = require('path')

// starting library
const server = express()
server
//using static files
    .use(express.static('public'))

    .set('views', path.join(__dirname, 'views'))
    .set('view engine','hbs')
//creat a rote
    .get('/' , (request, response) => {
   
   return response.render('index')
   
})


//Turn on the server 
server.listen(5500)
