const { Artist, Album } = require('../sequelize');



exports.createAlbum = (req, res) => {
  const id = req.params.artistId;
  Artist.findByPk(id).then(artist => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.create(req.body).then(album => {
        album.setArtist(artist).then(linkedAlbum => {
          res.status(201).json(linkedAlbum);
        });
      });
    }
  });
}

exports.findAlbums = (req, res) => {
  const id = req.params.artistId;
  Artist.findByPk(id).then(artist => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.findAll({ where: { artistId: id } }, { raw: true }).then(albums => {
        res.status(200).json(albums);
      });
    }
  });
}