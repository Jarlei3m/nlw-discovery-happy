const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();

server
// allows to use req.body
.use(express.urlencoded({ extended: true }))

// allow to uso static files
.use(express.static('public'))

.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// routes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)
