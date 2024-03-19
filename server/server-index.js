const express = require('express');
const { router } = require('./routers/songs-router')

const songsApi = express();
songsApi.use(express.json());

// Arreglo de rutas
const routers = [songsRouter];

// Usar cada router que hay en el array
routers.forEach((router) => {
    songsApi.use(router);
});

module.exports = { songsApi };