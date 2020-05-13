const express = require('express');

const artistControllers = require('./controllers/artist');
//const albumRouter = require('./routes/album');

const app = express();

app.use(express.json());

app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
app.get('/artists/:artistId', artistControllers.findArtistById);
module.exports = app;
