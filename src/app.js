const express = require('express');

const artistControllers = require('./controllers/artist');
const albumControllers = require('./controllers/album');
const songControllers = require('./controllers/song');

const app = express();

app.use(express.json());

app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
app.get('/artists/:artistId', artistControllers.findArtistById);
app.patch('/artists/:artistId', artistControllers.update);
app.delete('/artists/:artistId', artistControllers.deleteArtist);

app.post('/artists/:artistId/albums', albumControllers.createAlbum);
app.get('/artists/:artistId/albums', albumControllers.findAlbums);

app.post('/album/:albumId/song', songControllers.create);

module.exports = app;
