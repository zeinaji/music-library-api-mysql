const { Artist, Album, Song } = require('../sequelize');

exports.create = (req, res) => {
  const albumId = req.params.albumId;
  Album.findByPk(albumId).then(album => {
    Song.create(req.body).then(song => {
      Promise.all([
        song.setAlbum(album),
        song.setArtist(album.artistId),
      ]).then(([linkedSong]) => {
        Song.findByPk(linkedSong.id, { include: ['album', 'artist'], raw: true })
          .then(eagerLoadedSong => res.status(201).json(eagerLoadedSong));
      });
    });
  });
}





